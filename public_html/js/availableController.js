
var AvailableRouteBase = {
  model: function() {
    console.log('AvailableRoute.model');
    var available = new Connector.Available();
    available.location = this.controllerFor('location.index').get('location');
    available.language = this.controllerFor('location').get('userInput.language');
    return available;
  },
  actions: {
    searchAppointments: function() {
      this.refresh();
    }
  }
};
Connector.AvailableRoute = Ember.Route.extend(AvailableRouteBase);

var AvailableControllerBase = {
  init: function () {
    console.log('AvailableController.init');
  },
  appl_type_select: [
    {id: 1, label: 'Individual or Family'},
    {id: 2, label: 'Group (separate applications)'},
    {id: 3, label: 'Small Business (SHOP)'},
  ]
};

Connector.AvailableController = Ember.ObjectController.extend(AvailableControllerBase);

Connector.AvailableIndexController = Ember.ObjectController;