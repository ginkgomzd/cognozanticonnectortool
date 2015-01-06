
var ScheduleBase = {
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