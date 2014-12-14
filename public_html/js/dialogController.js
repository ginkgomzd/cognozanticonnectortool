
var DialogControllerBase = {
  init: function () {
    console.log('DialogController.init');
  },
  title: 'Find Local Help',
  user_prompt: 'Need help with your health insurance application? Enter your ZIP code below to find appointments with local application assisters.',
}

Connector.DialogController = Ember.ObjectController.extend(DialogControllerBase);