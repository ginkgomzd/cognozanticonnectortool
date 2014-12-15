
var DialogBase = {
  init: function() {
    console.log('DialogModel.init');
  },
  userInput: {
    near: 33629,
    radius: 100,
    language: ''
  }
};

Connector.Dialog = Ember.Object.extend(DialogBase);