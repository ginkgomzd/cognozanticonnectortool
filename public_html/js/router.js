
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
    schedule.appointment = this.controllerFor('availableAppointments').get('appointment');
    schedule.location = this.controllerFor('dialogLocator').get('location');
    console.dir(schedule);
    return schedule;
  }
}

Connector.ScheduleRoute = Ember.Route.extend(ScheduleRouteBase);


/***
 *  SAMPLE POST TO CONFIRM APPOINTMENT
 ***/
/*
 email	test@email.com
email_optin	1
end_time	2015-01-16T19:40:33+00:00
event_type	1
first_name	TEST
info_optin	1
language
last_name	TEST
location	2054
near	33629
occurrence_id	2147060
organization
phone	202-867-5309
postal_code	33629
radius	10
sms_optin	1
source	widget
start_time	2014-12-16T19:40:33+00:00

 */

/***
 *  SAMPLE CALENDAR LINKS
 */
/*
<a class="btn" href="/api/appointments-ical/a762fe30627e4947b5780f6e33c39a93?calendar=google">Google</a>
<a class="btn" href="/api/appointments-ical/a762fe30627e4947b5780f6e33c39a93?calendar=yahoo">Yahoo</a>
<a class="btn" href="/api/appointments-ical/a762fe30627e4947b5780f6e33c39a93?calendar=outlook">Outlook</a>

*/