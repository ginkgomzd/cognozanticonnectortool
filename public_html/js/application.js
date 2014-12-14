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
