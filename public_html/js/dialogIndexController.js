
var DialogIndexControllerBase = {
 init: function () {
   console.log('DialogIndexrController.init');
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

Connector.DialogIndexController = Ember.ObjectController.extend(DialogIndexControllerBase);