var sonicAllianceControllers = angular.module('sonicAllianceControllers',[]);

sonicAllianceControllers.controller('mainCtrl', function($scope, mainContent, $filter, $http) {
  $scope.title;
  $scope.bodyContent;
  
  mainContent
    .get()
    .$promise
    .then(function(data){
      $scope.title = data.title;
      $scope.bodyContent = data.bodyContent;
    });
  
});
