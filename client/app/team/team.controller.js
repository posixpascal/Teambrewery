'use strict';

angular.module('teambreweryApp')
  .controller('TeamCtrl',['$scope', '$http', 'Pokemon', '$stateParams', function ($scope, $http, Pokemon, $stateParams) {
      $scope.team = [];
      
      $scope.load = function(){
          if ($stateParams.teamId){ }
          else {
              
              for (var i = 0; i < 6; i++){
                  Pokemon.get({id: i}, function(pokemon){
                      $scope.team.push(pokemon);
                  });
              }
              
          }
      }
      
      $scope.load();
  }]);
