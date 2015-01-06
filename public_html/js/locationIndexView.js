var LocationIndexViewBase = {
  declareValidation: function () {
    // see http://jqueryvalidation.org/validate/
    $('#' + this.formId).validate();
  },
  didInsertElement: function() {
    this.declareValidation();
  },
  formId: 'assister-scheduler'
};
Connector.LocationIndexView = Ember.View.extend(LocationIndexViewBase);