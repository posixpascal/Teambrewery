'use strict';

angular.module('pokedex')
  .config(function ($stateProvider) {
    $stateProvider
      .state('pokedex', {
        url: '/pokedex',
        templateUrl: 'pokedex/pokedex.html',
        controller: 'PokedexController'
      }).state('pokedex.view', {
          url: '/pokemon/:pokemon',
          templateUrl: 'pokedex/pokemon.view.html',
          controller: 'PokedexController'
      });
  });