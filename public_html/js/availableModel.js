
var AvailableBase = {
  init: function() {
    console.log('AvailableModel.init');
  },
  userInput: {
    start_time: getDate(),
    end_time: getNextMonthDate(),
    language: '',
    event_type: 1,
  },
  location: {}
};

Connector.Available = Ember.Object.extend(AvailableBase);