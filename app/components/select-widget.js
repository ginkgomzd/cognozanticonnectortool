import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'select',
  classNames: [],
  classNameBindings: ["enabled:enabled:disabled", "class"],
  attributeBindings: ["value", "name"],
  computedOptions: function() {
    var optionData = this.get("options");
    var options = [];
    for (var i in optionData) {
      if(optionData.hasOwnProperty(i)) {
        options.push({label: this.getLabel(optionData[i]), value: this.getValue(optionData[i])});
      }
    }
    return options;
  }.property("options"),
  getLabel: function(option) {
    if (typeof option === "object" && option.hasOwnProperty(this.get("optionLabel"))) {
      return option[this.get("optionLabel")];
    } else {
      return option;
    }
  },
  getValue: function(option) {
    if (typeof option === "object" && option.hasOwnProperty(this.get("optionValue"))) {
      return option[this.get("optionValue")];
    } else {
      return option;
    }
  },
  change: function() {
    this.set("value", this.$().val());
  },
  watchValue: function() {
    this.$().val(this.get("value"));
  }.observes("value"),
  didInsertElement: function() {
    this.watchValue();
  }
});