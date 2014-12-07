'use strict';

angular.module('teambreweryApp')
  .controller('TeamsCtrl', function ($scope, $http, $state) {
  	$scope.newTeam = {
  		name: "Untitled",
  		tier: "OU"
  	}

  	$scope.createTeam = function(){
  		$state.go('teambuilder', {id: 0})
  	}
  });
