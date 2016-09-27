var ConfirmViewBase = {
  didInsertElement: function() {
    scrollToEl('#connector-api');
  }
};
Connector.ConfirmView = Ember.View.extend(ConfirmViewBase);