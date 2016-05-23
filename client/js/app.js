var app = angular
  .module('app', [
    'lbServices',
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
      $urlRouterProvider) {
    $stateProvider
      // .state('home', {
      //   url: '/',
      //   templateUrl: 'views/home.html',
      //   controller: 'TabController'
      // })
      .state('home', {
        url: '/',
        views: {  
          'navbar': {
              templateUrl : 'views/navbar.html',
          },      
          'content': {
              templateUrl : 'views/home.html',
              controller  : 'TabController'
          },
          'footer': {
              templateUrl : 'views/footer.html',
          }
        }
      })

      .state('translators', {
        url: '/translators',
        views: {  
          'navbar': {
              templateUrl : 'views/navbar.html',
          },      
          'content': {
              templateUrl : 'views/translators.html',
              controller  : 'TranslatorsController'
          },
          'sidebar': {
              templateUrl : 'views/sidebar.html',
          },
          'footer': {
              templateUrl : 'views/footer.html',
          }
        }
      })

      .state('translators_search', {
        url: '/translators_search',
        views: {  
          'navbar': {
              templateUrl : 'views/navbar.html',
          },      
          'content': {
              templateUrl : 'views/translators_search.html',
              controller  : 'TranslatorsSearchController'
          },
          'sidebar': {
              templateUrl : 'views/sidebar.html',
          },
          'footer': {
              templateUrl : 'views/footer.html',
          }
        }
      })

      .state('translators_search_results', {
        url: '/translators_search_results',
        views: {  
          'navbar': {
              templateUrl : 'views/navbar.html',
          },      
          'content': {
              templateUrl : 'views/translators_search_results.html',
              controller  : 'TranslatorsSearchController'
          },
          'sidebar': {
              templateUrl : 'views/sidebar.html',
          },
          'footer': {
              templateUrl : 'views/footer.html',
          }
        }
      })

      .state('forbidden', {
        url: '/forbidden',
        views: {  
          'navbar': {
              templateUrl : 'views/navbar.html',
          },      
          'content': {
              templateUrl : 'views/forbidden.html'
          },
          'footer': {
              templateUrl : 'views/footer.html',
          }
        }
      })
      .state('login', {
        url: '/login',
        views: {  
          'navbar': {
              templateUrl : 'views/navbar.html',
          },      
          'content': {
              templateUrl : 'views/login.html',
              controller: 'AuthLoginController'
          },
          'footer': {
              templateUrl : 'views/footer.html',
          }
        }
      })
      .state('logout', {
        url: '/logout',
        views: {  
          'navbar': {
              templateUrl : 'views/navbar.html',
          },      
          'content': {
              templateUrl : 'views/home.html',
              controller: 'AuthLogoutController'
          },
          'footer': {
              templateUrl : 'views/footer.html',
          }
        }
      })

      .state('sign-up', {
        url: '/sign-up',
        views: {  
          'navbar': {
              templateUrl : 'views/navbar.html',
          },      
          'content': {
              templateUrl : 'views/sign-up-form.html',
              controller: 'SignUpController'
          },
          'footer': {
              templateUrl : 'views/footer.html',
          }
        }
      })
      .state('sign-up-success', {
        url: '/sign-up/success',
        views: {  
          'navbar': {
              templateUrl : 'views/navbar.html',
          },      
          'content': {
              templateUrl : 'views/sign-up-success.html'
          },
          'footer': {
              templateUrl : 'views/footer.html',
          }
        }
      })

      // .state('translator_contact', {
      //   url: '/translator_contact',
      //   templateUrl: 'views/translator_contact.html'
      //   //controller: 'ContactTranslatorController'
      // })
      ;

    $urlRouterProvider.otherwise('/');
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

