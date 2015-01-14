'use strict';

angular.module("core")
  .controller('MainController', function ($scope, $http, $auth) {
    	$scope.$auth = $auth;
  });
