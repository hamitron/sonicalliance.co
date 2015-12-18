//https://docs.angularjs.org/api/ngResource/service/$resource
var sonicAllianceServices = angular.module('sonicAllianceServices', ['ngResource']);

sonicAllianceServices
	.factory('mainContent', ['$resource', function($resource){
    	// can be a json file (its in the directory)
    	return $resource('./mainContent.json');
  	}])
 

