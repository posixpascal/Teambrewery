'use strict';

angular.module('teambreweryApp')
  .controller('TeamsCtrl', function ($scope, $http, $state, Team) {
  	$scope.newTeam = {
  		name: "Untitled",
  		tier: "OU"
  	}

  	$scope.createTeam = function(){
  		Team.create($scope.newTeam).success(function(data){
  			$state.go('teambuilder', {id: data.team.id})
  		});
  	}
  });
