angular
  .module('app')
  .controller('TranslatorsController', ['$scope', '$http', 'Translator', function($scope, $http, Translator) {
    $scope.translators = [];
    // $http.
    // get('/api/Translators').
    // success(function(data) {
    //   console.log(JSON.stringify(data));
    //   //$scope.target = JSON.stringify(data);
    //     $scope.translators = data;
    // });
    function getAllTranslators() {
      Translator
        .find()
        .$promise
        .then(function(results) {
          $scope.allTranslators = results;
        });
    }
    getAllTranslators();
    
  }])

  .controller('TranslatorsSearchController', ['$scope', '$http', 'searchService',
                function($scope, $http, searchService) {
    $scope.searchSourceLang =  searchService.searchSourceLang;
      
    $scope.$watch('searchSourceLang', function() {
       searchService.searchSourceLang = $scope.searchSourceLang; 
    });

    $scope.searchTargetLang =  searchService.searchTargetLang;
      
    $scope.$watch('searchTargetLang', function() {
       searchService.searchTargetLang = $scope.searchTargetLang; 
    });

    $scope.searchSpec =  searchService.searchSpec;

    $scope.$watch('searchSpec', function() {
       searchService.searchSpec = $scope.searchSpec; 
    });

  
   $http.
    get('api/Translators/?filter= {"where": { "language_combination.source":'
                                                + $scope.searchSourceLang + 
                                                ', "language_combination.target":'+ $scope.searchTargetLang +
                                                ', "specialization":'+ $scope.searchSpec +
                                                '} }').
    success(function(data) {
      console.log(JSON.stringify(data));
      //$scope.target = JSON.stringify(data);
        $scope.translators = data;
    });      
     

  }]);


