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

function scrollToEl(el) {
  var coor = Ember.$(el).offset();
  window.scrollTo(coor.left, coor.top);
}

Ember.Handlebars.helper('event_time', function(start, end) {
  if (start === undefined) {
    return console.log('event_time helper: start time not given');
  }
  var dS = new Date(start);
  var dE = new Date(end);


  var time = '<span class="event_time-dow">' + dS.toLocaleDateString('en-US', {weekday: 'long'}) + '</span>';
  time += '<span class="event_time-month_date">' + dS.toLocaleDateString('en-US', {month: 'long', day: 'numeric'}) + '</span>';
  time += '<span class="event_time-start_time">' + dS.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', timeZoneName: 'short'});

  var diff = (dE - dS); // in milliseconds
  var minutes = Math.floor((diff/1000)/60); // first convert to seconds, then minutes, then whole minutes
  time += '<span class="event_time-appt_length">' + minutes + ' min</span>';
  return new Ember.Handlebars.SafeString('<div class="event_time">' + time + '</div>');
});

Ember.Handlebars.helper('accommodations', function(accommodations) {
  var innerHTML = '<ul>';
  if (accommodations !== undefined) {
    accommodations.forEach(function(item) {
      innerHTML += '<li>'+item.name+'</li>';
    });
  }
  innerHTML += '</ul>';
  return new Ember.Handlebars.SafeString('<div class="accommodations">' + innerHTML + '</div>');
});

Ember.Handlebars.helper('location_address_block', function(assister) {
  if (assister === undefined) return null;
  var output = '<strong>' + assister.name + '</strong><br />';
  output +=  assister.street_address + '<br />';

  if (assister.hasOwnProperty('extended_address')
        && assister.extended_address !== null
        && assister.extended_address.length > 0) {
    output += assister.extended_address + '<br />';
  }

  output += assister.locality + ', ' + assister.region + ' ' + assister.postal_code + '<br />';
  output += assister.formatted_phone + '<br />';

  return new Ember.Handlebars.SafeString(output);
});

Ember.Handlebars.helper('appt_event_title', function(appt) {
  if (appt.hasOwnProperty('title')
    && appt.location.hasOwnProperty('name')
    && appt.title !== appt.location.name
  ) {
    return new Ember.Handlebars.SafeString('<strong>' + appt.title + '</strong><br />');
  } else {
    return null;
  }
});

Connector.PrevNextComponent = Ember.Component.extend({
  actions: {
    nextAction: function() {
      this.sendAction('next');
    },
    previousAction: function() {
      this.sendAction('previous');
    }
  }
});

Connector.LocationListComponent = Ember.Component.extend({
  actions: {
    btnClick: function(location) {
      this.sendAction('btnClick', location);
    }
  }
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
