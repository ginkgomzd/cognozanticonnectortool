
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
 hasResults: false,
 currentPage: 1,
 actions: {
    scheduleAppointment: function(location) {
      this.location = location;
      this.transitionToRoute('available');
    },
    incrementPage: function() {
      this.set('currentPage', this.get('currentPage')+1);
    },
    decrementPage: function() {
      this.set('currentPage', this.get('currentPage')-1)
    },
 }
}

Connector.DialogIndexController = Ember.ObjectController.extend(DialogIndexControllerBase);