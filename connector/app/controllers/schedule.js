import Ember from 'ember';

export default Ember.Controller.extend({
  utils: Ember.inject.service('utils'),
  connector: Ember.inject.service('connector'),
  i18n: Ember.inject.service(),
  formId: "appointment-scheduler",
  results: function() {return [];}.property(),
  appointment: function() {
    return this.get("connector").get("selectedAppointment");
  }.property("connector.selectedAppointment"),

  location: function() {
    return this.get("connector").get("selectedLocation");
  }.property("connector.selectedLocation"),
  confirmationError: function() {return "";}.property(),

  getParams: function() {
    var data = this.get('userInput');
    data.email_optin = true;
    data.occurrence_id = this.get('appointment').id;
    data.sms_optin = true;
    data.requested_language = this.get("location").language || 'en';
    return data;
  },

  validate: function() {
    var valid = this.get("utils").validatePhone(this.get("userInput").phone);
    if(!valid) {
      this.set("confirmationError", this.get('i18n').t('errors.valid-phone'));
    }

    return valid;
  },

  actions: {
    schedule: function() {
      this.set("confirmationError", "");
      // conversion tracking code provided by Global Prarie; Conversion Name: Connector Page
      var ebRand = Math.random() + '';
      ebRand = ebRand * 1000000;
      Ember.$.getScript('//bs.serving-sys.com/Serving/ActivityServer.bs?cn=as&ActivityID=583090&rnd=' + ebRand);
      // end tracking code
      if (this.validate()) {
        var params = this.getParams();
        var that = this;
        this.get("connector").scheduleAppointment(params).then(function () {
          that.transitionToRoute('confirm');
        }, function (error) {
          that.set("confirmationError", error);
        });
      }
    }
  },

  /** Some helper Properties **/
  userInput: function() {
    return {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      optInEmail: true
    };
  }.property()
});