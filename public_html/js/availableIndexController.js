
var AvailableIndexRouteBase = {
  modelPrereqCheck: function() {
    return (this.controllerFor('available').get('userInput') !== undefined );
  },
  model: function() {
    if (!this.modelPrereqCheck()) return false;
    var ctrlAvailableIndex = this.controllerFor('available.index');
    var data = this.controllerFor('available').get('userInput');
    data.location = this.controllerFor('available').get('location').id;
    data.eventy_type = 1;
    data.available = 1; // only unreserved times
    data.page = ctrlAvailableIndex.get('currentPage');
    return Ember.$.ajax({
      type: 'GET',
      url: 'https://connector.getcoveredamerica.org/api/occurrences/',
      crossDomain: true,
      dataType: 'json',
      data: data
    }).success(function(result) {
      ctrlAvailableIndex.set('hasResults', true);
      return result;
    });
  },
  actions: {
    nextPage: function() {
      this.controllerFor('available.index').send('incrementPage');
      
      this.refresh();
    },
    previousPage: function() {
      this.controllerFor('available.index').send('decrementPage');
      this.refresh();
    }
  }
};
Connector.AvailableIndexRoute = Ember.Route.extend(AvailableIndexRouteBase);

var AvailableIndexControllerBase = {
  init: function () {
    console.log('AvailableIndexController.init');
  },
  hasResults: false,
  currentPage: 1,
  actions: {
    gotoSchedule: function(appointment) {
      this.appointment = appointment;
      this.transitionToRoute('schedule');
    },
    incrementPage: function() {
      this.set('currentPage', this.get('currentPage')+1);
    },
    decrementPage: function() {
      this.set('currentPage', this.get('currentPage')-1)
    },
 },
  // interstitial capture of user selection
  appointment: {}
};
Connector.AvailableIndexController = Ember.ObjectController.extend(AvailableIndexControllerBase);