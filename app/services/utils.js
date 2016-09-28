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
  }
});

export default utilsService;