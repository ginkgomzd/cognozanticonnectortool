import Ember from "ember";


export default Ember.Helper.helper(function(params) {
  var appt = params[0];
  if (appt.hasOwnProperty('title') &&
    appt.location.hasOwnProperty('name') &&
    appt.title !== appt.location.name
  ) {
    return new Ember.String.htmlSafe('<strong>' + appt.title + '</strong><br />');
  } else {
    return null;
  }
});