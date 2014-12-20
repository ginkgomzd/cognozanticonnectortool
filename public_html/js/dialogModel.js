
var DialogBase = {
  init: function() {
    console.log('DialogModel.init');
  },
  userInput: {
//    near: 99501, //TESTING ALASKA
//    near: 85012, //testing Phoenix
    near: 33614, // Testing Tampa
    radius: 10,
    language: ''
  }
};

Connector.Dialog = Ember.Object.extend(DialogBase);