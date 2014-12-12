
Connector.Router.map(function() {
  this.resource('dialog', { path:'/' }, function() {
    this.route('locator');
  });
  this.resource('available')
});

var DialogRouteBase = {
  model: function() {
    var dialog = new Connector.Dialog();
    return dialog;
  }
};
Connector.DialogRoute = Ember.Route.extend(DialogRouteBase);

var DialogLocatorRouteBase = {
  controllerName: 'dialog',
  model: function() {
    return Ember.$.ajax({
      type: 'GET',
      url: 'https://connector.getcoveredamerica.org/api/locations',
      crossDomain: true,
      contenType: 'application/json',
      dataType: 'json',
      data: this.controllerFor('dialog').get('userInput'),
    });
  }
}
Connector.DialogLocatorRoute = Ember.Route.extend(DialogLocatorRouteBase);

var AvailableRouteBase = {
  controllerName: 'dialog',
  model: function() {
    return this.controllerFor('dialog').get('location');
  }
};
Connector.AvailableRoute = Ember.Route.extend(AvailableRouteBase);

