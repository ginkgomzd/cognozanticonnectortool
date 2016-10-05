import Ember from 'ember';

export default Ember.Controller.extend({
  utils: Ember.inject.service('utils'),
  connector: Ember.inject.service('connector'),
  i18n: Ember.inject.service(),


  currentPage: function() {return 1;}.property(),
  results: function() {return [];}.property(),
  hasNext: function() { return false;}.property(),
  hasPrev: function() { return false;}.property(),


  //Bind the local location property to the
  //selectedLocation property of the connector service.
  location: function() {
    return this.get("connector").get("selectedLocation");
  }.property("connector.selectedLocation"),

  searchForAppointments: function() {
    if(!this.get("location")) {
      return false;
    }

    var that = this;
    var data = this.get('userInput');
    data.location = this.get('location').id;
    data.eventy_type = 1;
    data.available = 1; // only unreserved times
    if (this.get('currentPage') > 1) {
      data.offset = 25 * this.get('currentPage');
    }
    data.organization = null;
    return Ember.$.ajax({
      type: 'GET',
      url: 'https://connector.getcoveredamerica.org/api/occurrences/',
      crossDomain: true,
      dataType: 'json',
      data: data
    }).done(function(result) {
      that.set("hasNext", !!result.next);
      that.set("hasPrev", !!result.previous);
      that.set("results", result.results);
    });
  }.observes("location"),
  searchOnLoad: function(){
    this.searchForAppointments();
  }.on("init"),

  actions: {
    searchAppointments: function() {
      this.searchForAppointments();
    },
    nextPage: function() {
      this.set('currentPage', this.get('currentPage')+1);
      this.searchForAppointments();
      this.get("utils").scrollToEl('#connector-api');
    },
    previousPage: function() {
      this.set('currentPage', this.get('currentPage')-1);
      this.searchForAppointments();
      this.get("utils").scrollToEl('#connector-api');
    },
    gotoSchedule: function(appointment) {
      this.get("connector").set("selectedAppointment", appointment);
      this.transitionToRoute('schedule');
    },
  },

  /** Some helper Properties **/
  userInput: function() {
    return {
      start_time: this.get("utils").getDate(),
      end_time: this.get("utils").getNextMonthDate(),
      language: '',
      event_type: 1,
    };
  }.property(),
  applTypeOptions: function() {
    return [
      {id: 1, label: this.get('i18n').t('form-controls.application-type.options.individual')},
      {id: 2, label: this.get('i18n').t('form-controls.application-type.options.group')},
      {id: 3, label: this.get('i18n').t('form-controls.application-type.options.shop')},
    ];
  }.property()
});