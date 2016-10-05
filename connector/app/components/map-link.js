import Ember from 'ember';

export default Ember.Component.extend({
  i18n: Ember.inject.service(),
  tagName: 'a',
  classNames: ["maplink"],
  attributeBindings: ["href", "target", "title"],
  href: function() {
    var item = this.get("location");
    return "https://maps.google.com/?q="+item.street_address+"+"+item.locality+"+"+item.region+"+"+item.postal_code;
  }.property("location"),
  target: function() { return "_blank";}.property(),
  title: function() { return this.get('i18n').t('widgets.maplink.hover');}.property(),
});