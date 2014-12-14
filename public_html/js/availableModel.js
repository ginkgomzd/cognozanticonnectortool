
var AvailableBase = {
  init: function() {
    console.log('AvailableModel.init');
  },
  userInput: {
    start_time: getDate(),
    end_time: getNextMonthDate()
  },
  location: {}
};

Connector.Available = Ember.Object.extend(AvailableBase);