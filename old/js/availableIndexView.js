var AvailableIndexViewBase = {
  didInsertElement: function() {
    scrollToEl('#connector-api');
  }
};
Connector.AvailableIndexView = Ember.View.extend(AvailableIndexViewBase);