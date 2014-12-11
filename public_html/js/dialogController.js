
var DialogControllerBase = {
  init: function () {
    console.log('DialogController.init');
  },
  title: 'Find Local Help',
  step: 1,
  user_prompt: 'Need help with your health insurance application? Enter your ZIP code below to find appointments with local application assisters.',
  actions: {
    search: function() {
      console.log('DialogController.search');
      console.dir(this.get('userInput'));
      this.transitionToRoute('dialog.locator');
    }
  },
  userInput: {
    near: null,
    radius: 10,
  }
}

Connector.DialogController = Ember.ObjectController.extend(DialogControllerBase);