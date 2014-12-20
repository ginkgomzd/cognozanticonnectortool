
var DialogIndexRouteBase = {
  modelPrereqCheck: function() {
    return (this.controllerFor('dialog').get('userInput') !== undefined );
  },
  model: function() {
    if (!this.modelPrereqCheck()) return false;
    var ctrlDialogIndex = this.controllerFor('dialog.index');
    var data = this.controllerFor('dialog').get('userInput');
    data.partner_id = 32;
    data.page = ctrlDialogIndex.get('currentPage');
    return Ember.$.ajax({
      type: 'GET',
      url: 'https://connector.getcoveredamerica.org/api/locations/',
      crossDomain: true,
      dataType: 'json',
      data: data,
    }).success(function(result) {
      ctrlDialogIndex.set('hasResults', true);
      return result;
    });
  },
  actions: {
    searchLocations: function() {
      this.refresh();
    },
    nextPage: function() {
      this.controllerFor('dialog.index').send('incrementPage');
      this.refresh();
    },
    previousPage: function() {
      this.controllerFor('dialog.index').send('decrementPage');
      this.refresh();
    }
  }
};
Connector.DialogIndexRoute = Ember.Route.extend(DialogIndexRouteBase);

var DialogIndexControllerBase = {
 init: function () {
   console.log('DialogIndexController.init');
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