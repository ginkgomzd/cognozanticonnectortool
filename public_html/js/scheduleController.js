
var ScheduleRouteBase = {
  model: function() {
    console.log('ScheduleRouteBase');
    var schedule = new Connector.Schedule();
    schedule.appointment = this.controllerFor('availableIndex').get('appointment');
    schedule.location = this.controllerFor('location').get('location');
    return schedule;
  }
}
Connector.ScheduleRoute = Ember.Route.extend(ScheduleRouteBase);