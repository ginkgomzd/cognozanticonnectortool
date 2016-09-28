import Ember from 'ember';

export default Ember.Controller.extend({
  utils: Ember.inject.service('utils'),
  connector: Ember.inject.service('connector'),

  appointment: function() {
    return this.get("connector").get("selectedAppointment");
  }.property("connector.selectedAppointment"),

  location: function() {
    return this.get("connector").get("selectedLocation");
  }.property("connector.selectedLocation"),

  confirmation: function() {
    return this.get("connector").get("confirmation");
  }.property("connector.confirmation"),
});