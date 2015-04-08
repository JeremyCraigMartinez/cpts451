angular.module('ReviewService', [])
	.factory('review', 
		function($http){
				return {
					get: function(){
						return $http.get('/review');
					}
				}
			});