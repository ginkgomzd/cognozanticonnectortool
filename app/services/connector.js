import Ember from 'ember';

/**
 * This service may be extended in future to do
 * some of the searching and other connector related
 * functions.
 * At the moment it is being used as a reliable way to
 * bind data from one step to the next while keeping
 * the observers intact. E.g. no need for controllerFor("whatever")
 * types statements
 */
var connectorService = Ember.Service.extend({

});

export default connectorService;