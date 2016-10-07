import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function(controller, model) {
    if (EmberENV.environment === "widget") {
      this.render('widget');
    } else {
      this.render('application');
    }
  },
});