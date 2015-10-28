
var ScheduleBase = {
  userInput: {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    optInEmail: true
  },
  appointment: {},
  location: {},
  confirmationError: ''
};

Connector.Schedule = Ember.Object.extend(ScheduleBase);