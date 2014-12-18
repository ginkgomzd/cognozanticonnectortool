
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