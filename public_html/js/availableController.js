
var AvailableControllerBase = {
  init: function () {
    console.log('AvailableController.init');
  },
  actions: {
    searchAvailableAppointments: function() {
      this.transitionToRoute('available.appointments');
    }
  },
  appl_type_select: [
    {id: 1, label: 'Individual or Family'},
    {id: 2, label: 'Group (separate applications)'},
    {id: 3, label: 'Small Business (SHOP)'},
  ]
};

Connector.AvailableController = Ember.ObjectController.extend(AvailableControllerBase);

Connector.AvailableIndexController = Ember.ObjectController;