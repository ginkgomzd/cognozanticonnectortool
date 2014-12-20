
Connector.Router.map(function() {
  this.resource('dialog', { path:'/' }, function() {});
  this.resource('available', { path: '/available' }, function() {});
  this.resource('schedule');
  this.resource('confirm');
});
