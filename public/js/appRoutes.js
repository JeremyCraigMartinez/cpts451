// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })
        .when('/query', {
        	templateUrl: 'views/testquery.html',
        	controller: 'QueryController'
        })
        .otherwise({redirectTo: '/'});

    $locationProvider.html5Mode(true);

}]);