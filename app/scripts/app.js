'use strict';
var app = angular.module('PowerballApp', [
    'underscore',
    'ui.router'
])
.config(
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('index', {
            url: '/',
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            controllerAs: 'vm'
        })
})