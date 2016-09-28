import Ember from "ember";


export default Ember.Helper.helper(function(params) {
  var cal = params[0];
  var guid = params[1];

  if (guid === undefined) {
    console.log('ical helper: guid not given');
    return false;
  }
  if (cal === undefined) {
    cal = 'Google';
  }
  return new Ember.String.htmlSafe('<a class="btn" href="https://connector.getcoveredamerica.org/api/appointments-ical/'+guid+'?calendar='+cal.toLowerCase()+'">'+cal+'</a>');
});