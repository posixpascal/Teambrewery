'use strict';

angular.module('teambreweryApp')
  .controller('TeamCtrl',['$scope', '$http', 'Pokemon', '$stateParams', '$modal', '$rootScope', 'typeChart', 'Team', function ($scope, $http, Pokemon, $stateParams, $modal, $rootScope, typeChart, Team) {
      $scope.team = []; 
      $scope.types = Object.keys(typeChart);
    
      $scope.load = function(){
          if ($stateParams.id){ 
              $http.get('/api/team/get/' + $stateParams.id).success(function(data){

                  $scope.team = JSON.parse(data[0].team);
              });
          }
          
          else {
              $scope.randomizeTeam();
              
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

          var modalScope = $rootScope.$new();
          
          var scope = {
              getPokemonByName: function(name){
                  return $http.get("/api/pokemon/by-name/" + name).then(function(res){
                      return res.data;
                  });
              },
              addPokemon: function(pokemon){
                  $scope.team.push(pokemon);
                  $scope.$theModal.close();
                  
              }
          }
          scope.setActivePokemon = function($item, $model, $label){
               modalScope.activePokemon = $model;
          };
          
          angular.extend(modalScope, scope);
          $scope.$theModal =  $modal.open({
            templateUrl: 'components/modal/modal.html',
            windowClass: "modal-default",
            scope: modalScope
          });
      }
  
      $scope.saveTeam = function(){
          Team.save($scope.team);
          
      }


      $scope.getImmunity = function(type){
          var immunity = 0;
          angular.forEach($scope.team, function(pokemon){
              angular.forEach(pokemon.types, function(theType){
                  if (typeChart[theType].damageTaken[type] == 3){
                      immunity++;
                  }
              })
          });
          return immunity;
      };
      
      $scope.getQuadResistance = function(type){
          var quadResistance = 0;
          angular.forEach($scope.team, function(pokemon){
              var resistent = 0;
              
              angular.forEach(pokemon.types, function(theType){
                  if (typeChart[theType].damageTaken[type] == 3) return;
                  else if (typeChart[theType].damageTaken[type] == 2){
                      resistent++;
                  } 
              });
              
              if (resistent == 2) quadResistance++;
          });
          return quadResistance;
      };

      
      
      $scope.load();
  }]);
