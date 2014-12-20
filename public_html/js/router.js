
Connector.Router.map(function() {
  this.resource('location', { path:'/' }, function() {});
  this.resource('available', { path: '/available' }, function() {});
  this.resource('schedule');
  this.resource('confirm');
});
