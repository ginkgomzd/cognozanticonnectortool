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
