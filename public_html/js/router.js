
Connector.Router.map(function() {
  this.resource('dialog', { path:'/' }, function() {
    this.route('locator');
  });
  this.resource('available', {path: 'available'}, function() {
    this.route('appointments');
  });
  this.resource('schedule');
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
    available.language = this.controllerFor('dialog').get('userInput').language;
    return available;
  }
};
Connector.AvailableRoute = Ember.Route.extend(AvailableRouteBase);

var AvailableAppointmentsRouteBase = {
  model: function() {
    var data = this.controllerFor('available').get('userInput');
    data.location = this.controllerFor('available').get('location').id;
    data.eventy_type = 1;
    data.available = 1; // only unreserved times
    return Ember.$.ajax({
      type: 'GET',
      url: 'https://connector.getcoveredamerica.org/api/occurrences',
      crossDomain: true,
      contenType: 'application/json',
      dataType: 'json',
      data: data
    });
  }
};
Connector.AvailableAppointmentsRoute = Ember.Route.extend(AvailableAppointmentsRouteBase);

var ScheduleRouteBase = {
  model: function() {
    console.log('ScheduleRouteBase');
    var schedule = new Connector.Schedule();
    schedule.appointment = this.controllerFor('availabelAppointments').get('appointment');
    console.dir(schedule);
    return schedule;
  }
}