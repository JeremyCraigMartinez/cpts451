angular.module('UserService', [])
	.factory('user', 
		function($http){
				return {
					get: function(id){
						return $http.get('/user/'+id);
					}
				}
			});