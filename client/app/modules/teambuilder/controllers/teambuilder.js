'use strict';

angular.module('teambuilder')
    .controller('TeambuilderController',['$scope', 'Team', 'TierList', function($scope, Team, TierList) {
        $scope.team = new Team();
        $scope.TierList = TierList;

        $scope.load = function(){
          // show dialog for new team
          if ($scope.team.pokemons.length === 0){
            angular.element(document.querySelector(".teambuilder__team-modal")).toggleClass('teambuilder__team-modal--visible');
          }
        };

        $scope.setTier = function(tier){
          $scope.team.setTier(tier);



        };

        $scope.load();
    }]);