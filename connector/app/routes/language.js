import Ember from 'ember';

export default Ember.Route.extend({
  i18n: Ember.inject.service(),
  model: function (params) {
    var locales = this.get('i18n.locales');
    if(locales.indexOf(params.language) !== -1) {
      this.set('i18n.locale', params.language);
      this.transitionTo("/");
    }
    return params.language;
  }
});