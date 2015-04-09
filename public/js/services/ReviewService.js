angular.module('ReviewService', [])
	.factory('review', 
		function($http){
				return {
					get: function(id){
						return $http.get('/business/'+id);
					}
				}
			});