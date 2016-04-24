var app = angular
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
      })

      .state('translators_search', {
        url: '/translators_search',
        templateUrl: 'views/translators_search.html',
        controller: 'TranslatorsSearchController'
      })

      .state('translators_search_results', {
        url: '/translators_search_results',
        templateUrl: 'views/translators_search_results.html',
        controller: 'TranslatorsSearchController'
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