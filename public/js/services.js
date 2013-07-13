s = angular.module('myApp.services', ['ngResource']);

s.factory('MediaService', function($resource) {
  return $resource('https://itunes.apple.com/:action',
    {action: "search", callback: 'JSON_CALLBACK'},
    {get:  {method: 'JSONP'}}
  );
});


s.factory('WidgetService', function($resource, $http) {
  //delete $http.defaults.headers.common['X-Requested-With'];
  return $resource('/widgets', {},
    {get:  {method: 'GET', isArray: true}}
  );
});
