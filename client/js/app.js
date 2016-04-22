angular
  .module('app', [
    'lbServices',
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
      $urlRouterProvider) {
    $stateProvider
      .state('translators', {
        url: '/translators',
        templateUrl: 'views/translators.html',
        controller: 'TranslatorsController'
      });

    $urlRouterProvider.otherwise('translators');
  }]);

// var app = angular.module('app', ['ngRoute']);

// app.config(function ($routeProvider) {
    
//     $routeProvider
    
//     .when('/', {
//         templateUrl: 'views/translators.html',
//         controller: 'TranslatorsController'
//     })
    
//     .when('/translators', {
//         templateUrl: 'views/translators.html',
//         controller: 'TranslatorsController'
//     })
// });