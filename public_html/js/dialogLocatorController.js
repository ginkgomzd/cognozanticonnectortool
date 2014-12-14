
var DialogLocatorControllerBase = {
 init: function () {
   console.log('DialogLocatorController.init');
 },
 /** TODO: make model? **/
 /***
  * hold onto user selection. set by scheduleAppointment
  * @type type
  */
 location: {},
 actions: {
    scheduleAppointment: function(location) {
      this.location = location;
      this.transitionToRoute('available');
    },
 }
}

Connector.DialogLocatorController = Ember.ObjectController.extend(DialogLocatorControllerBase);