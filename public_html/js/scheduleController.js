
var ScheduleRouteBase = {
  model: function() {
    var schedule = new Connector.Schedule();
    schedule.appointment = this.controllerFor('availableIndex').get('appointment');
    schedule.location = this.controllerFor('locationIndex').get('location');
    var oldController = this.controllerFor('schedule');
    if (oldController) {
      schedule.confirmationError = oldController.get("confirmationError");
    }
    return schedule;
  },
  actions: {
    schedule: function() {
      // conversion tracking code provided by Global Prarie; Conversion Name: Connector Page
      var ebRand = Math.random() + '';
      ebRand = ebRand * 1000000;
      Ember.$.getScript('//bs.serving-sys.com/Serving/ActivityServer.bs?cn=as&ActivityID=583090&rnd=' + ebRand);
      // end tracking code

      this.transitionTo('confirm');
    }
  }
};
Connector.ScheduleRoute = Ember.Route.extend(ScheduleRouteBase);