
Connector.Router.map(function() {
  this.resource('dialog', { path:'/' }, function() {
    this.route('locator');
  });
  this.resource('available', {path: 'available'}, function() {
    this.route('appointments');
  });
});

var DialogRouteBase = {
  model: function() {
    return new Connector.Dialog();
  }
};
Connector.DialogRoute = Ember.Route.extend(DialogRouteBase);


var DialogLocatorRouteBase = {
  model: function() {
    console.log('DialogLocatorRoute.model');
    console.dir(Connector.userInput);
    return Ember.$.ajax({
      type: 'GET',
      url: 'https://connector.getcoveredamerica.org/api/locations',
      crossDomain: true,
      contenType: 'application/json',
      dataType: 'json',
      data: this.controllerFor('dialog').get('userInput')
    });
  }
};
Connector.DialogLocatorRoute = Ember.Route.extend(DialogLocatorRouteBase);

var AvailableRouteBase = {
  model: function() {
    console.log('AvailableRoute.model');
    var available = new Connector.Available();
    available.location = this.controllerFor('dialogLocator').get('location');
    return available;
  }
};
Connector.AvailableRoute = Ember.Route.extend(AvailableRouteBase);

var AvailableAppointmentsRouteBase = {
  model: function() {
    return Ember.$.ajax({
      type: 'GET',
      url: 'https://connector.getcoveredamerica.org/api/appointments',
      crossDomain: true,
      contenType: 'application/json',
      dataType: 'json',
      data: this.controllerFor('available').get('userInput')
    });
  }
};
Connector.AvailableAppointmentsRoute = Ember.Route.extend(AvailableAppointmentsRouteBase);

