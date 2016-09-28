import Ember from 'ember';

/**
 * This service may be extended in future to do
 * the searching for Locations and Appointments.
 *
 * At the moment it is being used as a reliable way to
 * bind data from one step to the next while keeping
 * the observers intact. E.g. no need for controllerFor("whatever")
 * types statements
 * And to do the actual scheduling of the appintments
 *
 * Properties that are being bound to this service from outside:
 * selectedLocation
 * selectedAppointment
 *
 */
var connectorService = Ember.Service.extend({

  scheduleAppointment: function(params) {
    var connector = this;
    return new Ember.RSVP.Promise(function(resolve, reject) {
      connector.getToken().done(function(result) {
        Ember.$.ajax({
          type: 'POST',
          url: 'https://connector.getcoveredamerica.org/api/appointments/',
          crossDomain: true,
          dataType: 'json',
          data: params
        }).done(function(result){
          // There is a status property that might be useful (result.status == 1)
          if(result.status == 1) {
            connector.set('confirmation', result);
            resolve();
          } else {
            reject(result.statusText);
          }
        }, function(jqXHR, status, error) {
          reject(jqXHR.responseText);
        });
      });
    });
  },
  getToken: function() {
    return Ember.$.ajax({
      url: 'https://connector.getcoveredamerica.org/api/me/'
    });
  },
});

export default connectorService;