var myApp = angular.module('myApp', ['ngResource', 'myApp.directives', 'myApp.controllers','myApp.services']);

// Routes

myApp.config(function($routeProvider) {
  $routeProvider
    .when('/',
      {
        controller: '',
        templateUrl: 'partials/home.html'
      })
    .when('/simpleForm',
      {
        controller: 'SimpleForm',
        templateUrl: 'partials/simpleForm.html'
      })
    .when('/complexForm',
      {
        controller: 'ComplexForm',
        templateUrl: 'partials/complexForm.html'
      })
    .when('/directive',
      {
        controller: '',
        templateUrl: 'partials/directive.html'
      })
    .when('/resource',
      {
        controller: 'Resource',
        templateUrl: 'partials/resource.html'
      })
    .when('/deployd',
      {
        controller: 'Deployd',
        templateUrl: 'partials/deployd.html'
      })
    .otherwise({ redirectTo: '/'});
});
