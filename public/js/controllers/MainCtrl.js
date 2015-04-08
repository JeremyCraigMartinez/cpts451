// public/js/controllers/MainCtrl.js
var underscore = angular.module('underscore', []);
underscore.factory('_', function() {
  return window._; // assumes underscore has already been loaded on the page
});

angular.module('MainCtrl', ['ngRoute'])
	.controller('MainController', 
		function($scope, $q, initialize, column1_requests, column2_requests, column3_requests, _) {
			initialize.get()
			.success(function(data) {
				$scope.main_business_categories = {};
				for (each in data) {
					$scope.main_business_categories[data[each]["main_category"]] = [];
				}
			})

			$scope.sub_business_categories = [];

			var update_sub_business_categories = function() {
				$scope.sub_business_categories = [];
				for (each in $scope.main_business_categories) {
					$scope.sub_business_categories = _.union($scope.sub_business_categories, 
																									 $scope.main_business_categories[each]);
				}
			}

			$scope.col1func = function(category) {
				console.log($scope.day_of_the_week);
				console.log($scope.open);
				console.log($scope.close);
				if ($scope.main_business_categories[category].length === 0) {
					column1_requests.get(category)
					.success(function(data) {
						for (each in data){
							$scope.main_business_categories[category].push(data[each]["name"]);
						}
						update_sub_business_categories();
					});
				}
				else {
					$scope.main_business_categories[category] = [];
					update_sub_business_categories();
				}
			}

			var pop_or_push = function(arr, item) {
				if (arr.indexOf(item) > -1) {
					var index = arr.indexOf(item);
					arr.splice(index,1);
				}
				else {
					arr.push(item);
				}				
			}

			$scope.selected_sub_categories = []
			$scope.col2func = function(category) {
				pop_or_push($scope.selected_sub_categories, category);
				column2_requests.post($scope.selected_sub_categories)
					.success(function(data) {
						$scope.attrs = data;
					});
			}

			$scope.all_attrs = []
			$scope.col3func = function(attribute) {
				pop_or_push($scope.all_attrs, attribute);
				column3_requests.post($scope.all_attrs, $scope.selected_sub_categories)
					.success(function(data) {
						$scope.businesses = data;
					});
			}

});
