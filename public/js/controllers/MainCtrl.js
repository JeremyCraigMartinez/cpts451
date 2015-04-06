// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', ['ngRoute'])
	.controller('MainController', 
		function($scope, $q, column1_requests, column2_requests) {

			$scope.main_business_categories = [
				"Active Life",
				"Arts & Entertainment",
				"Automotive",
				"Car Rental",
				"Cafes",
				"Beauty & Spas",
				"Convenience Stores",
				"Dentists",
				"Doctors",
				"Drugstores",
				"Department Stores",
				"Education",
				"Event Planning & Services",
				"Flowers & Gifts",
				"Food",
				"Health & Medical",
				"Home Services",
				"Home & Garden",
				"Hospitals",
				"Hotels & Travel",
				"Hardware Stores",
				"Grocery",
				"Medical Centers",
				"Nurseries & Gardening",
				"Nightlife",
				"Restaurants",
				"Shopping",
				"Transportation"
			];

			$scope.col1func = function(category) {
				var deferred = $q.defer();
				column1_requests.get(category)
				.success(function(data) {
					$scope.sub_business_categories = []
					for (each in data){
						$scope.sub_business_categories.push(data[each]["name"]);
					}
				});
				return deferred.promise;
			}

			$scope.col2func = function(category) {
				var deferred = $q.defer();
				column2_requests.get(category)
				.success(function(data) {
					console.log(data);
				});
				return deferred.promise;
			}
});
