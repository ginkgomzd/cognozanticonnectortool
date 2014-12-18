
var AvailableAppointmentsControllerBase = {
  init: function () {
    console.log('AvailableAppointmentsController.init');
  },
  actions: {
    gotoSchedule: function(appointment) {
      this.appointment = appointment;
      this.transitionToRoute('schedule');
    }
  },
  // interstitial capture of user selection
  appointment: {}
};

Connector.AvailableAppointmentsController = Ember.ObjectController.extend(AvailableAppointmentsControllerBase);