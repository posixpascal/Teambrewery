'use strict';

angular.module('pokedex')
  .config(function ($stateProvider) {
    $stateProvider
      .state('pokedex', {
        url: '/pokedex',
        templateUrl: 'app/templates/pokedex/pokedex.html',
        controller: 'PokedexController'
      }).state('pokedex.view', {
          url: '/pokemon/:pokemon',
          templateUrl: 'app/templates/pokedex/pokemon.view.html',
          controller: 'PokedexController'
      });
  });