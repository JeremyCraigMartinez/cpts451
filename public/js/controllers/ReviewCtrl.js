angular.module('ReviewCtrl', ['ngRoute'])
	.controller('ReviewController', 
		function($scope, $q, $routeParams, review) {
			review.get($routeParams['business_id'])
			.success(function (data) {
				$scope.reviews = [];
				for (obj in data){
					$scope.reviews.push(data[obj]);
				}
				console.log($scope.reviews)
			});
		});