var app = angular.module('routingModule');

app.controller('formController', function($scope, serviceEx, $location){
	$scope.madLib = function(){
		serviceEx.noun1 = $scope.noun1;
		serviceEx.noun2 = $scope.noun2;
		serviceEx.adj1 = $scope.adj1;
		serviceEx.adj2 = $scope.adj2;
		serviceEx.verb1 = $scope.verb1;
		serviceEx.verb2 = $scope.verb2;
		serviceEx.verb3 = $scope.verb3;
		$location.path('/display');
	}


});



// app2.controller('servCtrl', function($scope, serviceEx) {
// 	$scope.madLib = function(){
// 		$scope
// 	}
  // $scope.noun1 = serviceEx.noun1;
  // $scope.noun2 = serviceEx.noun2;
  // $scope.adj1 = serviceEx.adj1;
  // $scope.adj2 = serviceEx.adj2;
  // $scope.verb1 = serviceEx.verb1;
  // $scope.verb2 = serviceEx.verb2;
  // $scope.verb3 = serviceEx.verb3;
// });