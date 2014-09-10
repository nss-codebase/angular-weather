/* jshint camelcase:false */

(function(){
  'use strict';

  angular.module('weather')
  .controller('ConditionsController', ['$scope', '$http', function($scope, $http){
    $scope.title = 'Conditions';

    $scope.getConditions = function(){
      var url = 'http://api.wunderground.com/api/aad218fcd659a15a/conditions/q/' + $scope.zip + '.json?callback=JSON_CALLBACK';
      $http.jsonp(url).then(function(response){
        $scope.conditions = response.data.current_observation;
      });
    };
  }]);
})();

