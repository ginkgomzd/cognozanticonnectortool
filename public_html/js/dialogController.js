
var DialogControllerBase = {
  init: function () {
    console.log('DialogController.init');
  },
  title: 'Find Local Help',
  user_prompt: 'Need help with your health insurance application? Enter your ZIP code below to find appointments with local application assisters.',
  actions: {
  },
  userInput: {
    near: null,
    radius: 100,
  }
}

Connector.DialogController = Ember.ObjectController.extend(DialogControllerBase);