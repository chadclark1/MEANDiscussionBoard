var app = angular.module('app', ['ngRoute', 'ngCookies']);
    /* configuration for angular route */
    app.config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: '/partials/login.html',
          controller: 'accountsController'
        })
        .when('/wall', {
          templateUrl: '/partials/wall.html',
          controller: 'messagesController',
        })
        .otherwise({
          redirectTo: '/'
        });
    });