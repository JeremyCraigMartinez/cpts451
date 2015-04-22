    // public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
      $routeProvider
        // home page
        .when('/', {
          templateUrl: 'views/home.html',
          controller: 'MainController'
        })
        .when('/business/:business_id', {
          templateUrl: 'views/review.html',
          controller: 'ReviewController'
        })
        .when('/user/:user_id', {
          templateUrl: 'views/user.html',
          controller: 'UserController'
        })
        .otherwise({redirectTo: '/'});
      $locationProvider.html5Mode(true);
    }]);