
Connector.Router.map(function() {
  this.resource('dialog', { path:'/' }, function() {});
  this.resource('available', {path: 'available'}, function() {});
  this.resource('schedule');
});

var DialogRouteBase = {
  model: function() {
    return new Connector.Dialog();
  }
};
Connector.DialogRoute = Ember.Route.extend(DialogRouteBase);

var DialogIndexRouteBase = {
  model: function() {
    if (this.controllerFor('dialog').get('userInput') === undefined ) return false;
    return Ember.$.ajax({
      type: 'GET',
      url: 'https://connector.getcoveredamerica.org/api/locations',
      crossDomain: true,
      contenType: 'application/json',
      dataType: 'json',
      data: this.controllerFor('dialog').get('userInput')
    });
  },
  actions: {
    searchLocations: function() {
      this.refresh();
    }
  }
};
Connector.DialogIndexRoute = Ember.Route.extend(DialogIndexRouteBase);

var AvailableRouteBase = {
  model: function() {
    console.log('AvailableRoute.model');
    var available = new Connector.Available();
    available.location = this.controllerFor('dialogIndex').get('location');
    available.language = this.controllerFor('dialog').get('userInput').language;
    return available;
  },
  actions: {
    searchAppointments: function() {
      this.refresh();
    }
  }
};
Connector.AvailableRoute = Ember.Route.extend(AvailableRouteBase);

var AvailableIndexRouteBase = {
  model: function() {
    if (this.controllerFor('available').get('userInput') === undefined ) return false;
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
Connector.AvailableIndexRoute = Ember.Route.extend(AvailableIndexRouteBase);

var ScheduleRouteBase = {
  model: function() {
    console.log('ScheduleRouteBase');
    var schedule = new Connector.Schedule();
    schedule.appointment = this.controllerFor('availableAppointments').get('appointment');
    schedule.location = this.controllerFor('dialogIndex').get('location');
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