
var ScheduleRouteBase = {
  model: function() {
    console.log('ScheduleRouteBase');
    var schedule = new Connector.Schedule();
    schedule.appointment = this.controllerFor('availableIndex').get('appointment');
    schedule.location = this.controllerFor('locationIndex').get('location');
    return schedule;
  },
  actions: {
    schedule: function() {
      this.transitionTo('confirm');
    }
  }
};
Connector.ScheduleRoute = Ember.Route.extend(ScheduleRouteBase);