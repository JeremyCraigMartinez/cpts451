// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', ['ngRoute'])
	.controller('MainController', 
		function($scope, $q, Main) {

			console.log(Main);
			//$scope.tagline = 'To the moon and back!';   

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

			$scope.func = function() {
				var deferred = $q.defer();
				Main.get()
				.success(function(data) {
					$scope.entries = data;
				});
				return deferred.promise;
			}
});
