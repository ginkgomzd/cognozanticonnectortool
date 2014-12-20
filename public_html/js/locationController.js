
var LocationRouteBase = {
  model: function() {
    return new Connector.Location();
  }
};
Connector.LocationRoute = Ember.Route.extend(LocationRouteBase);

var LocationControllerBase = {
  init: function () {
    console.log('LocationController.init');
  },
  title: 'Find Local Help',
  user_prompt: 'Need help with your health insurance application? Enter your ZIP code below to find appointments with local application assisters.',
  language_select: [
      {id: "", label: 'All'},
      {id: "en", label: 'English'},
      {id: "es", label: 'Spanish'},
      {id: "tel", label: 'Phone translation (all languages)'},
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
  ],
  radius_select: [
    5, 10, 25, 50, 100
  ],
}

Connector.LocationController = Ember.ObjectController.extend(LocationControllerBase);