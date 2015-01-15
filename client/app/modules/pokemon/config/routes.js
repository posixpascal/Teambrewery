'use strict';

angular.module('pokemon')
  .config(function ($stateProvider) {
    $stateProvider
      .state('pokemon', {
        url: '/pokemon',
        templateUrl: 'pokemon/pokemon.html',
        controller: 'PokemonController'
      }).state('pokemon.add', {
          url: '/add',
          templateUrl: 'pokemon/pokemon.add.html',
          controller: 'AddPokemonController'
      });
  });