import Ember from 'ember';

export default Ember.Controller.extend({
  utils: Ember.inject.service('utils'),
  connector: Ember.inject.service('connector'),
  i18n: Ember.inject.service(),
  hasNext: function() { return false;}.property(),
  hasPrev: function() { return false;}.property(),
  location: function() {return {};}.property(),
  partnerResults: function() {return [];}.property(),
  otherResults: function() {return [];}.property(),
  currentPage: function() {return 1;}.property(),
  hasOtherResults: function() {
    return (this.get("otherResults").length > 0);
  }.property("otherResults"),
  hasPartnerResults: function() {
    return (this.get("partnerResults").length > 0);
  }.property("partnerResults"),
  showResults: function() {
    return (this.hasOtherResults || this.hasPartnerResults);
  }.property('hasOtherResults', 'hasPartnerResults'),
  showPartnerResults: function() {
    return (this.currentPage === 1);
  }.property('currentPage'),

  filterLocationResults: function() {
    var partners = this.get("partnerResults");
    var others = this.get("otherResults");
    var filtered =
      others.filter(function(location){
        var found = false;
        partners.forEach(function(partner){
          if (partner.id === location.id) {
            found = true;
          }
        });
        if (!found) {return location;}
      });
    this.set('otherResults', filtered);
  }.observes('partnerResults'),

  doSearch: function() {
    var that = this;
    var params = this.ajaxRequestParams();
    params.data = this.get('userInput');
    delete params.data.partner; //ensure is not set
    if (this.get('currentPage') > 1) {
      params.data.offset = 25 * this.get('currentPage');
    }


    Ember.$.ajax(params).done(function(result){
      that.set('otherResults', result.results);
      that.set("hasNext", !!result.next);
      that.set("hasPrev", !!result.previous);

      //Now get Partner Results
      params.data.partner = 32;
      delete params.data.offset; //ensure is not set
      params.data.page = 1; // don't allow subsequent pages


      Ember.$.ajax(params)
        .done(function(result) {
          that.set('partnerResults', result.results);
        });
    });
  },

  actions: {
    searchLocations: function() {
      this.set("currentPage", 1);
      this.doSearch();
    },
    scheduleAppointment: function(location) {
      this.get("connector").set("selectedLocation", location);
      //console.log(location);
      this.transitionToRoute('available');
    },
    nextPage: function() {
      this.set('currentPage', this.get('currentPage')+1);
      this.doSearch();
      this.get("utils").scrollToEl('#location-results-container');
    },
    previousPage: function() {
      this.set('currentPage', this.get('currentPage')-1);
      this.doSearch();
      this.get("utils").scrollToEl('#location-results-container');
    }
  },

  radiusOptions: function() {
    return [5, 10, 25, 50, 100];
  }.property(),
  userInput: function() {
    return {
      near: '',
      radius: 10,
      language: ''
    };
  }.property(),
  languageOptions: function() {
    return [
      {id: "", label: this.get('i18n').t('form-controls.language.options.all')},
      {id: "en", label: 'English'},
      {id: "es", label: 'Spanish'},
      {id: "tel", label: this.get('i18n').t('form-controls.language.options.tel')},
      {id: "cpe", label: 'Creole'},
      {id: "it", label: 'Italian'},
      {id: "ko", label: 'Korean'},
      {id: "ar", label: 'Arabic'},
      {id: "pt", label: 'Portuguese'},
      {id: "de", label: 'German'},
      {id: "cmn", label: 'Mandarin'},
      {id: "vi", label: 'Vietnamese'},
      {id: "ru", label: 'Russian'},
      {id: "yyef", label: 'Cantonese'},
      {id: "tl", label: 'Tagalog'},
      {id: "pl", label: 'Polish'},
      {id: "ja", label: 'Japanese'},
      {id: "hi", label: 'Hindi'},
      {id: "fr", label: 'French'},
      {id: "so", label: 'Somali'},
      {id: "my", label: 'Burmese'},
      {id: "ne", label: 'Nepali'},
      {id: "ton", label: 'Tongan'},
      {id: "fij", label: 'Fijian'},
      {id: "sam", label: 'Samoan'},
      {id: "lin", label: 'Lingala'},
      {id: "san", label: 'Sango'},
    ];
  }.property(),
  ajaxRequestParams: function() {
    return {
      type: 'GET',
      url: this.get("connector").getApiLocaleBase() + 'locations/',
      crossDomain: true,
      dataType: 'json',
    };
  },
});