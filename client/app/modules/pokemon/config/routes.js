'use strict';

angular.module('pokemon')
  .config(function ($stateProvider) {
    $stateProvider
      .state('pokemon', {
        url: '/pokemon',
        templateUrl: 'app/templates/pokemon/pokemon.html',
        controller: 'PokemonController'
      }).state('pokemon.add', {
          url: '/add',
          templateUrl: 'app/templates/pokemon/pokemon.add.html',
          controller: 'AddPokemonController'
      });
  });