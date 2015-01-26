var AvailableViewBase = {
  didInsertElement: function() {
    scrollToEl('#connector-api');
  }
};
Connector.AvailableView = Ember.View.extend(AvailableViewBase);