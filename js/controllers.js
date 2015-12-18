var sonicAllianceControllers = angular.module('sonicAllianceControllers',[]);

sonicAllianceControllers
	.controller('mainCtrl', function($scope, mainContent, $filter, $http) {
  	$scope.title;
  	$scope.bodyContent;
  	$scope.showEntry = false;
	  mainContent
	    .get()
	    .$promise
	    .then(
	    	function(data){
	      	$scope.title = data.title;
	      	$scope.bodyContent = data.bodyContent;
	  		}
	  	);
		}
	);

sonicAllianceControllers.controller('locationEntryCtrl', function($scope, locationEntry){
    // view project details
  	$scope.setId = function(id){
    	locationEntry
      	.get({pid: id})
      	.$promise
      	.then(function(data){
      	$scope.entry = data.entry;
    	});
    	$scope.showEntry = true;
  	}
	}	
);
