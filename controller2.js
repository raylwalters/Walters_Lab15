var app = angular.module('routingModule');

app.controller('disController', function($scope, serviceEx){
	  $scope.noun1 = serviceEx.noun1;
	  $scope.noun2 = serviceEx.noun2;
	  $scope.adj1 = serviceEx.adj1;
	  $scope.adj2 = serviceEx.adj2;
	  $scope.verb1 = serviceEx.verb1;
	  $scope.verb2 = serviceEx.verb2;
	  $scope.verb3 = serviceEx.verb3;

});