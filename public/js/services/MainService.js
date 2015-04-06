angular.module('MainService', [])
	.factory('column1_requests', 
		function($http){
				return {
					get: function(category){
						return $http.get('/col1/' + category);
					}
				}

			})
	.factory('column2_requests', 
		function($http){
				return {
					get: function(category){
						return $http.get('/col2/' + category);
					}
				}

			});
