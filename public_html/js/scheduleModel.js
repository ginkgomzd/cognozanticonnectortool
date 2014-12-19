
var ScheduleBase = {
  init: function() {
    console.log('ScheduleModel.init');
  },
  userInput: {
    first_name: 'Tester  ',
    last_name: 'McTesterson',
    email: 'spam@me.com',
    phone: '202-867-5309',
    optInEmail: true
  },
  appointment: {},
  location: {}
}

Connector.Schedule = Ember.Object.extend(ScheduleBase);