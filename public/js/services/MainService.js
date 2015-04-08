angular.module('MainService', [])
	.factory('initialize', 
		function($http){
				return {
					get: function(category){
						return $http.get('/initialize');
					}
				}

			})
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
					post: function(all_sub_categories){
						return $http.post('/col2', all_sub_categories);
					}
				}
			})
	.factory('column3_requests', 
		function($http){
				return {
					post: function(all_attrs, categories){
						return $http.post('/col3', {all_attrs:all_attrs, categories:categories});
					}
				}
			});

