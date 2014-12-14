
var DialogBase = {
  init: function() {
    console.log('DialogModel.init');
  },
  userInput: {
    near: 33629,
    radius: 100
  }
};

Connector.Dialog = Ember.Object.extend(DialogBase);