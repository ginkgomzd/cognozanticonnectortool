
var ScheduleBase = {
  init: function() {
    console.log('ScheduleModel.init');
  },
  userInput: {
    firstName: 'Tester  ',
    lastName: 'McTesterson',
    email: 'spam@me.com',
    phone: '555-867-5309',
    optInEmail: true
  },
  appointment: {},
  location: {}
}

Connector.Schedule = Ember.Object.extend(ScheduleBase);