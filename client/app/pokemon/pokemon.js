'use strict';

angular.module('teambreweryApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('pokemon', {
        url: '/pokemon/:id',
        templateUrl: 'app/pokemon/pokemon.html',
        controller: 'PokemonCtrl'
      });
  });