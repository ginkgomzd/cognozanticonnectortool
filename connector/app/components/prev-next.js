import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  show: function() {
    return (this.get("next") || this.get("prev"));
  }.property("next", "prev"),
  actions: {
    nextAction: function() {
      this.sendAction("nextAction");
    },
    previousAction: function() {
      this.sendAction("previousAction");
    }
  }
});