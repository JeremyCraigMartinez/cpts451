angular.module('ReviewCtrl', ['ngRoute'])
	.controller('ReviewController', 
		function($scope, $q, $routeParams, $rootScope, review, usSpinnerService) {

			//////////////////////
			$scope.startSpin = function() {
	      if (!$scope.spinneractive) {
	        usSpinnerService.spin('spinner-2');
	        $scope.startcounter++;
	      }
	    };

	    $scope.stopSpin = function() {
	      if ($scope.spinneractive) {
	        usSpinnerService.stop('spinner-2');
	      }
	    };

	    $rootScope.$on('us-spinner:spin', function(event, key) {
	      $scope.spinneractive = true;
	    });

	    $rootScope.$on('us-spinner:stop', function(event, key) {
	      $scope.spinneractive = false;
	    });
	    //////////////////////

	    console.log($scope.startSpin);
	    $scope.startSpin();
			review.get($routeParams['business_id'])
			.success(function (data) {
				$scope.reviews = [];
				$scope.stopSpin();
				for (obj in data){
					$scope.reviews.push(data[obj]);
				}
			});
		});