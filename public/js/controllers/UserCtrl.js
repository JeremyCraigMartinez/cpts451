angular.module('UserCtrl', ['ngRoute'])
	.controller('UserController', 
		function($scope, $q, $routeParams, user) {
			user.get($routeParams['user_id'])
			.success(function (data) {
				$scope.data = data[0];
			});
		});