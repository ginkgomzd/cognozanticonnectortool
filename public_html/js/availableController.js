
var AvailableControllerBase = {
  init: function () {
    console.log('AvailableController.init');
  },
  actions: {
    searchAvailableAppointments: function() {
      this.transitionToRoute('available.appointments');
    }
  },
};

Connector.AvailableController = Ember.ObjectController.extend(AvailableControllerBase);

Connector.AvailableIndexController = Ember.ObjectController;