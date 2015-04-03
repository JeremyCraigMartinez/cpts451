// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', []).controller('MainController', function($scope) {

    //$scope.tagline = 'To the moon and back!';   

		$scope.posts = [];
		$scope.addPost = function(){
		  if(!$scope.title || $scope.title === '') { return; }
		  $scope.posts.push({
		    title: $scope.title,
		    link: $scope.link,
		    upvotes: 0
		  });
		  $scope.title = '';
		  $scope.link = '';
		};
		$scope.incrementUpvotes = function(post) {
		  post.upvotes += 1;
		};
});
