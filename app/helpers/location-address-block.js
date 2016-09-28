import Ember from "ember";


export default Ember.Helper.helper(function(params) {
  var assister = params[0];
  if (assister === undefined) {return null;}
  var output = '<strong>' + assister.name + '</strong><br />';
  output +=  assister.street_address + '<br />';

  if (assister.hasOwnProperty('extended_address') &&
    assister.extended_address !== null &&
    assister.extended_address.length > 0) {
    output += assister.extended_address + '<br />';
  }

  output += assister.locality + ', ' + assister.region + ' ' + assister.postal_code + '<br />';
  output += assister.formatted_phone + '<br />';

  return new Ember.String.htmlSafe(output);
});