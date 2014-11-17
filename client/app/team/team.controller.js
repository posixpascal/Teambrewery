'use strict';

angular.module('teambreweryApp')
  .controller('TeamCtrl',['$scope', '$http', 'Pokemon', '$stateParams', '$modal', '$rootScope', function ($scope, $http, Pokemon, $stateParams, $modal, $rootScope) {
      $scope.team = []; 
      
    
      $scope.load = function(){
          if ($stateParams.teamId){ 
              // load team from db
          }
          
          else {
              
              
          }
      }
      
      $scope.randomizeTeam = function(){
          var randomTeam = [];
          var i = 6;
          while (i--){
              randomTeam.push( Math.round( 750 * Math.random() ));
          };
          $scope.team = [];
          for (var i = 0, len = randomTeam.length; i < len; i++){
              Pokemon.byPokedexID(randomTeam[i]).success(function(pokemon){
                  $scope.team.push(pokemon);
              });
          }
      }
      
   
      $scope.addPokemon = function(){
          $scope.newPokemon = {};
          var modalScope = $rootScope.$new();
          var scope = {
              getPokemonByName: function(name){
                  return $http.get("/api/pokemon/by-name/" + name).then(function(res){
                      return res.data;
                  });
              }
          }
          angular.extend(modalScope, scope);
          return $modal.open({
            templateUrl: 'components/modal/modal.html',
            windowClass: "modal-default",
            scope: modalScope
          });
      }
      
      
      
      $scope.load();
  }]);
