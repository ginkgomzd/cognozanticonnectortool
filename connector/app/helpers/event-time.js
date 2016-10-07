import Ember from "ember";


export default Ember.Helper.helper(function(params) {
  var start = params[0];
  var end = params[1];

  if (start === undefined) {
    return console.log('event_time helper: start time not given');
  }
  var dS = new Date(start);
  var dE = new Date(end);


  var time = '';

  // Weekday not working in safari for some reason
  // time += '<span class="event_time-dow">' + dS.toLocaleDateString('en-US', {weekday: 'long'}) + '</span>';
  time += '<span class="event_time-month_date">' + dS.toLocaleDateString('en-US', {month: 'short', day: 'numeric'}) + ', </span>';
  time += '<span class="event_time-start_time">' + dS.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', timeZoneName: 'short'}) + ', </span>';

  var diff = (dE - dS); // in milliseconds
  var minutes = Math.floor((diff/1000)/60); // first convert to seconds, then minutes, then whole minutes
  time += '<span class="event_time-appt_length">' + minutes + ' min</span>';
  return new Ember.String.htmlSafe('<div class="event_time">' + time + '</div>');
});