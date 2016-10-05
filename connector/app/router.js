import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('location', { path:'/' });
  this.route('language', { path:'/:language' });
  this.route('available');
  this.route('schedule');
  this.route('confirm');
});

export default Router;
