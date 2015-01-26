var ScheduleViewBase = {
  declareValidation: function () {
    // see http://jqueryvalidation.org/validate/
    $('#' + this.formId).validate({
      rules: {
        phone: {
          // see http://jqueryvalidation.org/phoneUS-method
          phoneUS: true,
          required: true
        }
      }
    });
  },
  didInsertElement: function() {
    this.declareValidation();
    scrollToEl('#connector-api');
  },
  formId: 'appointment-scheduler'
};
Connector.ScheduleView = Ember.View.extend(ScheduleViewBase);