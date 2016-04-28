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
      })

      .state('forbidden', {
        url: '/forbidden',
        templateUrl: 'views/forbidden.html',
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'AuthLoginController'
      })
      .state('logout', {
        url: '/logout',
        controller: 'AuthLogoutController'
      })

      .state('sign-up', {
        url: '/sign-up',
        templateUrl: 'views/sign-up-form.html',
        controller: 'SignUpController',
      })
      .state('sign-up-success', {
        url: '/sign-up/success',
        templateUrl: 'views/sign-up-success.html'
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

// app.directive("showTranslator", function() {
//    return {
//        restrict: 'AE', //restrict to attribute, element
//        templateUrl: 'client/js/directives/show_translator.html',
//        //template: '<h3>test</h3>',
//        replace: true
//    }
// });

