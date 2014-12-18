
var DialogBase = {
  init: function() {
    console.log('DialogModel.init');
  },
  userInput: {
    near: 99501,
    radius: 10,
    language: ''
  }
};

Connector.Dialog = Ember.Object.extend(DialogBase);