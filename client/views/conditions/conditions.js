(function(){
  'use strict';

  angular.module('weather')
  .controller('ConditionsController', ['$scope', function($scope){
    $scope.title = 'Current Conditions';
  }]);
})();

