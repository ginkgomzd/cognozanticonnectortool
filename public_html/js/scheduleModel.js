
var ScheduleBase = {
  init: function() {
    console.log('ScheduleModel.init');
  },
  userInput: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    optInEmail: true
  },
  appointment: {}
}

Connector.Schedule = Ember.Object.extend(ScheduleBase);