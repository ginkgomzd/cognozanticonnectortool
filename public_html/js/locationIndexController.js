
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
    delete params.data.partner; //ensure is not set
    params.data.page = ctrlLocationIndex.get('currentPage');

    return Ember.$.ajax(params)
    .done(function(result){
      thisRoute.controllerFor('locationIndex').set('otherResults', result);
      ctrlLocationIndex.set('hasOtherResults', (result.results.length > 0));

      //Now get Partner Results
      params.data.partner = 32;
      params.data.page = 1; // don't allow subsequent pages

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
      scrollToEl('#location-results-container');
    },
    nextPage: function() {
      this.controllerFor('location.index').send('incrementPage');
      scrollToEl('#location-results-container');
      this.refresh();
    },
    previousPage: function() {
      this.controllerFor('location.index').send('decrementPage');
      scrollToEl('#location-results-container');
      this.refresh();
    }
  }
};
Connector.LocationIndexRoute = Ember.Route.extend(LocationIndexRouteBase);

var LocationIndexControllerBase = {
 /** TODO: make model? **/
 /***
  * hold onto user selection. set by scheduleAppointment
  * @type type
  */
 location: {},
 partnerResults: {},
 otherResults: {},
 currentPage: 1,
 hasOtherResults: false,
 hasPartnerResults: false,
 showResults: function() {
   return (this.hasOtherResults || this.hasPartnerResults);
 }.property('hasOtherResults', 'hasPartnerResults')
 ,
 showPartnerResults: function() {
   return (this.currentPage === 1);
 }.property('currentPage')
 ,
 filterLocationResults: function() {
  var partners = this.partnerResults.results;
  var others = this.otherResults.results;
  var filtered =
    others.filter(function(location){
      var found = false;
      partners.forEach(function(partner){
        if (partner.id === location.id) {
          found = true;
        }
      });
      if (!found) return location;
    });
  this.set('otherResults.results', filtered);
  }.observes('partnerResults')
  ,
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
