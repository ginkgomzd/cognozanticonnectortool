
var ScheduleBase = {
  init: function() {
    console.log('ScheduleModel.init');
  },
  userInput: {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    optInEmail: true
  },
  appointment: {},
  location: {}
}

Connector.Schedule = Ember.Object.extend(ScheduleBase);