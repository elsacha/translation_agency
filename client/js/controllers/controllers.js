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
    function getTranslators() {
      Translator
        .find()
        .$promise
        .then(function(results) {
          $scope.translators = results;
        });
    }
    getTranslators();
    
  }]);