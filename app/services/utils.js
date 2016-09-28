import Ember from 'ember';

var utilsService = Ember.Service.extend({
  scrollToEl: function(el, ms) {
    ms = typeof ms !== 'undefined' ? ms : 1000;

    var coor = Ember.$(el).offset();

    Ember.$('html, body').animate({
      scrollTop: coor.top
    }, ms);
  },

  getDate: function getDate() {
    var date = new Date().toISOString();
    return date.substr(0,10);
  },

  getNextMonthDate: function getNextMonthDate() {
    var date = new Date();
    date.setMonth(date.getMonth() + 1);
    return date.toISOString().substr(0,10);
  },

  validatePhone: function(phone){
    phone = phone.replace( /\s+/g, "" );
    return  phone.length > 9 && phone.match( /^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]([02-9]\d|1[02-9])-?\d{4}$/ );
  }

});

export default utilsService;