import Ember from 'ember';

var utilsService = Ember.Service.extend({
  scrollToEl: function(el, ms) {
    ms = typeof ms !== 'undefined' ? ms : 1000;

    var coor = Ember.$(el).offset();

    Ember.$('html, body').animate({
      scrollTop: coor.top
    }, ms);
  }
});

export default utilsService;