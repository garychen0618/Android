// angular.module is a global place for creating, registering and retrieving Angular modules
// 'directory' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'directory.services' is found in services.js
// 'directory.controllers' is found in controllers.js
angular.module('rmApp', ['ionic', 'rmApp.services', 'rmApp.controllers'])


    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            .state('rm-home', {
                url: '/rm-home',
                templateUrl: 'templates/rm-home.html',
                controller: 'RMListCtrl'
            })

//            .state('employee-detail', {
//                url: '/employee/:employeeId',
//                templateUrl: 'templates/employee-detail.html',
//                controller: 'EmployeeDetailCtrl'
//            })
            
            .state('poa', {
                url: '/rm-home/poa',
                templateUrl: 'templates/poa.html',
                controller: 'POACtroller'
            })

            .state('employee-reports', {
                url: '/employee/:employeeId/reports',
                templateUrl: 'templates/employee-reports.html',
                controller: 'EmployeeReportsCtrl'
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/rm-home');

    });
