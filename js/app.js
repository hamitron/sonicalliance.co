var sonicAlliance = angular.module('sonicAlliance', [
  "sonicAllianceServices",
  "sonicAllianceControllers",
  ]);

sonicAlliance.config(['$httpProvider', function ($httpProvider) {
 delete $httpProvider.defaults.headers.common["X-Requested-With"]
}]);





  
