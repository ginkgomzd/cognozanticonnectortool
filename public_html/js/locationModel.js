
var LocationBase = {
  init: function() {
    console.log('LocationModel.init');
  },
  userInput: {
//    near: 99501, //TESTING ALASKA
//    near: 85012, //testing Phoenix
    near: 33614, // Testing Tampa
    radius: 10,
    language: ''
  }
};

Connector.Location = Ember.Object.extend(LocationBase);