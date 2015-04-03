angular.module('MainService', [])
	.factory('Main', 
		function($http){
			/*
			console.log('done');
				this.search = function(name) {
					console.log("here");
					$http({
						method: 'GET',
						url: 'localhost:8000/query'
					}).
					then(function(response) {
						console.log(response.data);
					});
				}
				*/
				return {
					get: function(){
						return $http.get('/query');
					}
				}

			});