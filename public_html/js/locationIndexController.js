
var LocationIndexRouteBase = {
  modelPrereqCheck: function() {
    return (this.controllerFor('location').get('userInput') !== undefined );
  },
  model: function() {
    if (!this.modelPrereqCheck()) return false;
    var ctrlLocationIndex = this.controllerFor('location.index');
    var data = this.controllerFor('location').get('userInput');
    data.partner_id = 32;
    data.page = ctrlLocationIndex.get('currentPage');
    return Ember.$.ajax({
      type: 'GET',
      url: 'https://connector.getcoveredamerica.org/api/locations/',
      crossDomain: true,
      dataType: 'json',
      data: data,
    }).success(function(result) {
      ctrlLocationIndex.set('hasResults', true);
      return result;
    });
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
 hasResults: false,
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