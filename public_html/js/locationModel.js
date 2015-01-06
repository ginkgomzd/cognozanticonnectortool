
var LocationBase = {
  init: function() {
    console.log('LocationModel.init');
  },
  userInput: {
    near: '',
    radius: 10,
    language: ''
  }
};

Connector.Location = Ember.Object.extend(LocationBase);