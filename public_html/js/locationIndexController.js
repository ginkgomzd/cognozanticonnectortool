
var LocationIndexRouteBase = {
  modelPrereqCheck: function() {
    return (this.controllerFor('location').get('userInput') !== undefined );
  },
  model: function() {
    if (!this.modelPrereqCheck()) return false;
    var otherResults = {};
    var thisRoute = this;
    var ctrlLocationIndex = this.controllerFor('location.index');
    var params = this.ajaxRequestParams();
    params.data = this.controllerFor('location').get('userInput');
    params.data.page = ctrlLocationIndex.get('currentPage');
    return Ember.$.ajax(params)
    .done(function(result){
      thisRoute.controllerFor('locationIndex').set('otherResults', result);
      ctrlLocationIndex.set('hasOtherResults', (result.results.length > 0));

      //Now get Partner Results
      params.data.partner = 32;
      return Ember.$.ajax(params)
      .done(function(result) {
        thisRoute.controllerFor('locationIndex').set('partnerResults', result);
        ctrlLocationIndex.set('hasPartnerResults', (result.results.length > 0));
        return result;
      });
    });
  },
  ajaxRequestParams: function() {
    return {
      type: 'GET',
      url: 'https://connector.getcoveredamerica.org/api/locations/',
      crossDomain: true,
      dataType: 'json',
    }
  },
  actions: {
    searchLocations: function() {
      this.refresh();
    },
    nextPage: function() {
      this.controllerFor('location.index').send('incrementPage');
      this.refresh();
    },
    previousPage: function() {
      this.controllerFor('location.index').send('decrementPage');
      this.refresh();
    }
  }
};
Connector.LocationIndexRoute = Ember.Route.extend(LocationIndexRouteBase);

var LocationIndexControllerBase = {
 init: function () {
   console.log('LocationIndexController.init');
 },
 /** TODO: make model? **/
 /***
  * hold onto user selection. set by scheduleAppointment
  * @type type
  */
 location: {},
 partnerResults: {},
 otherResults: {},
 hasOtherResults: false,
 hasPartnerResults: false,
 showResults: function() {
   return (this.hasOtherResults || this.hasPartnerResults);
 }.property('hasOtherResults', 'hasPartnerResults'),
 currentPage: 1,
 actions: {
    scheduleAppointment: function(location) {
      this.location = location;
      this.transitionToRoute('available');
    },
    incrementPage: function() {
      this.set('currentPage', this.get('currentPage')+1);
    },
    decrementPage: function() {
      this.set('currentPage', this.get('currentPage')-1)
    },
 }
}

Connector.LocationIndexController = Ember.ObjectController.extend(LocationIndexControllerBase);