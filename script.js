var app = angular.module('routingModule', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/form',
	{
		controller: 'formController',
		templateUrl: 'form.html'
	})
	.when('/display',
	{
		controller: 'disController',
		templateUrl: 'display.html'
	})
	.otherwise(
	{
		redirectTo: 'form.html',
		
	})
}]);




