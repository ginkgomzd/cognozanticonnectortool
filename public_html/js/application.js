/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.Connector = Ember.Application.create({
 rootElement: '#connector-api',
 LOG_TRANSITIONS: true
});
Connector.Router = Ember.Router.extend({
  location: 'none'
});

Ember.Handlebars.helper('maplink', function(item, additional) {
  if (item == undefined) {
    return console.log("no param supplied to maplink.");
  }
  return new Ember.Handlebars.SafeString('<a class="maplink" href="https://maps.google.com/?q='+item.street_address+'+'+item.locality+'+'+item.region+'+'+item.postal_code+'" '+ additional +' target="_blank" title="Look up address on Google Maps">View map</a>');
});

function getDate() {
  var date = new Date().toISOString();
  return date.substr(0,10);
}

function getNextMonthDate() {
  var date = new Date();
  date.setMonth(date.getMonth() + 1);
  return date.toISOString().substr(0,10);
}

Ember.Handlebars.helper('event_time', function(start, end) {
  if (start == undefined) {
    return console.log('event_time helper: start time not given');
  }
  var dS = new Date(start);
  var dE = new Date(end);

  var time = dayOfWeek(dS)+' '+fmtTime(dS)+' - '+fmtTime(dE)+' '+timezoneName(dS);
  return new Ember.Handlebars.SafeString('<div class="event_time"><h4>event_time</h4>'+time+'</div>');
});

function dayOfWeek(date) {
  switch(date.getDay()) {
    case 0:
      return 'Sunday';
      break;
    case 1:
      return 'Monday';
      break;
    case 2:
      return 'Tuesday';
      break;
    case 3:
      return 'Wednesday';
      break;
    case 4:
      return 'Thursday';
      break;
    case 5:
      return 'Friday';
      break;
    case 6:
      return 'Saturday'
      break;
  }
}

function fmtTime(date) {
  var h, m, M = null;
  h = date.getHours();
  m = date.getMinutes();
  M = 'AM'

  if (m.length = 1) {
    m = '0'+m;
  }
  if (h > 12) {
    h = h-12;
    M = 'PM';
  }

  return h+':'+m+M;
}

function timezoneName(date) {
  tz = date.getTimezoneOffset();
  switch (tz/60) {
    case 5:
      return 'Eastern';
      break;
    case 6:
      return 'Central';
      break;
    case 7:
      return 'Mountain';
      break;
    case 8:
      return 'Pacific';
      break;
    case 9:
      return 'Alaska';
      break;
    case 10:
      return 'Hawaii';
      break;
  }
}

Ember.Handlebars.helper('accommodations', function(accommodations) {
  var innerHTML = '<ul>';
  if (accommodations !== undefined) {
    accommodations.forEach(function(item) {
      innerHTML += '<li>'+item.name+'</li>';
    });
  }
  innerHTML += '</ul>';
  return new Ember.Handlebars.SafeString('<div class="accommodations><h4 class="accommodations">Accommodations</h4>'+innerHTML+'</div>');
});

Ember.Handlebars.helper('location_address_block', function(assister) {
  var output = '<strong>' + assister.name + '</strong><br />';
  output +=  assister.street_address + '<br />';

  if (assister.hasOwnProperty('extended_address') && assister.extended_address.length > 0) {
    output += assister.extended_address + '<br />';
  }

  output += assister.locality + ', ' + assister.region + ' ' + assister.postal_code + '<br />';
  output += assister.formatted_phone + '<br />';

  return new Ember.Handlebars.SafeString(output);
});

/***
 * Keep for reference:
 */
//(function($) { $(document).ready(
//function () {
//  var widgetSelector = '#connector-api-widget';
//  var widget = $(widgetSelector);
//  $('<div />').addClass('content').appendTo(widgetSelector);
//  $('<div />').addClass('tpl-stash').appendTo(widgetSelector);
//
//  $.ajax({
//      type: 'GET',
//      url: 'https://connector.getcoveredamerica.org/api/locations',
//      crossDomain: true,
////      contenType: 'application/json',
//      dataType: 'json',
//      data: {
//        zip: 20001,
//        token: 'GZwXtT5rySiw1BdoLcuvDsWDryaOLIk79kiV198Q'
//        },
//      success: function(results) { render(results); },
//      error: function(something) { alert('fail'); console.dir(something); }
//    });
//
//    function render(results) {
//      widget.find(".content").replaceWith(JSON.stringify(results));
//    }
//
// })}(jQuery));
