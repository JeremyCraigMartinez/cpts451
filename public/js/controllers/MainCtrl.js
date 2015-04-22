// public/js/controllers/MainCtrl.js
var underscore = angular.module('underscore', []);
underscore.factory('_', function() {
  return window._; // assumes underscore has already been loaded on the page
});

angular.module('MainCtrl', ['ngRoute'])
	.controller('MainController', 
		function($scope, $q, initialize, column1_requests, column2_requests, column3_requests, _) {
			initialize.get()
			.success(function (data) {
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
					$scope.attrs = [];
					$scope.selected_sub_categories = [];
					$scope.all_attrs = [];
					$scope.businesses = [];
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
						if (!(Object.keys(data).length)) {
							$scope.businesses = [];
							$scope.attrs = [];
							$scope.all_attrs = [];
						}
						var i;
						for (each in data)
							if (data[each]['attr_key'] == "Price Range") i=each;

						if (i) {
							var index = data.indexOf(i);
							data.splice(index,1);
							data.splice(i,0,{attr_key:"Price Range 4"});
							data.splice(i,0,{attr_key:"Price Range 3"});
							data.splice(i,0,{attr_key:"Price Range 2"});
							data.splice(i,0,{attr_key:"Price Range 1"});
						}
						$scope.attrs = data;
					});
			}

			$scope.all_attrs = []
			$scope.day_of_the_week = ""
			$scope.open = ""
			$scope.close = ""
			$scope.price_range = "";
			$scope.all_or_any = "";
			$scope.col3func = function(attribute) {
				if (attribute != "") {
					if (attribute.startsWith("Price Range")) {
						if ($scope.price_range) $scope.price_range = ""
						else $scope.price_range = parseInt(attribute.substring(attribute.length-1,attribute.length));
					}
					else {
						pop_or_push($scope.all_attrs, attribute);
					}
				}
				var schedule = {
					all_or_any: $scope.all_or_any,
					day:   			$scope.day_of_the_week,
					open:  			$scope.open,
					close: 			$scope.close
				}
				column3_requests.post($scope.all_attrs, $scope.selected_sub_categories, schedule, $scope.price_range)
					.success(function(data) {
						$scope.businesses = data;
					});
			}

});
