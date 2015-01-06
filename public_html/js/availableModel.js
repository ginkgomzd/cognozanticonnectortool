
var AvailableBase = {
  userInput: {
    local_start_time: getDate(),
    local_end_time: getNextMonthDate(),
    language: '',
    event_type: 1,
  },
  location: {}
};

Connector.Available = Ember.Object.extend(AvailableBase);