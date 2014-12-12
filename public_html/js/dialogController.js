
var DialogControllerBase = {
  init: function () {
    console.log('DialogController.init');
  },
  queryParams: ['location'],
  location: null,
  title: 'Find Local Help',
  user_prompt: 'Need help with your health insurance application? Enter your ZIP code below to find appointments with local application assisters.',
  actions: {
    scheduleAppointment: function(location) {
      this.location = location;
      this.transitionToRoute('available');
    }
  },
  userInput: {
    near: 33629,
    radius: 100,
    start_time: getDate(),
    end_time: getNextMonthDate()
  }
}

Connector.DialogController = Ember.ObjectController.extend(DialogControllerBase);