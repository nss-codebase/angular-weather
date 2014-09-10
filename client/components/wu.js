(function(){
  'use strict';

  angular.module('weather')
  .factory('wu', ['$http', function($http){
    function getUrl(service, zip){
      return 'http://api.wunderground.com/api/aad218fcd659a15a/' + service + '/q/' + zip + '.json?callback=JSON_CALLBACK';
    }

    function getConditions(zip){
      var url = getUrl('conditions', zip);
      return $http.jsonp(url);
    }

    function getWebcams(zip){
      var url = getUrl('webcams', zip);
      return $http.jsonp(url);
    }

    return {getConditions:getConditions, getWebcams:getWebcams};
  }]);
})();

