/*
angular.module('MainService', []).
	factory('Main', 
		['$http', 
		function($http){
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
			}]);
*/
angular.module('sampleApp.services', []).
	service('MainService', 
		['$http', 
		function($http){
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
			}]);			