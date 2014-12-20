
var ConfirmRouteBase = {
  getParams: function() {
    var ctlSchedule = this.controllerFor('schedule');
    this.data = ctlSchedule.get('userInput');
    this.data.email_optin = 1;
    console.dir(ctlSchedule.get('appointment'));
    this.data.occurrence_id = ctlSchedule.get('appointment').id;
    this.data.sms_optin = 1;
    console.dir(this.data);
    return this.data;
  },
  modelPrereqCheck: function() {
    return true;
  },
  model: function() {
    console.log('ConfirmRoute.model');
    var data = this.getParams();
    if (!this.modelPrereqCheck()) return false;
    return this.getToken()
      .success(function() {
        return Ember.$.ajax({
          type: 'POST',
          url: 'https://connector.getcoveredamerica.org/api/appointments/',
          crossDomain: true,
          dataType: 'json',
          data: data
        });
      })
      .success(function(result) {
        console.log('success');
        console.dir(result);
        return result;
      }
    );
  },
  getToken: function() {
    return Ember.$.ajax({
      url: 'https://connector.getcoveredamerica.org/api/me/'
    });
  },
  data: {}
}
Connector.ConfirmRoute = Ember.Route.extend(ConfirmRouteBase);

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