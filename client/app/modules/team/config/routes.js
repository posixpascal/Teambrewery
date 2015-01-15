'use strict';

angular.module('team')
    .config(function($stateProvider) {
        $stateProvider
            .state('team', {
                url: '/team/:id',
                templateUrl: 'team/team.html',
                controller: 'TeamController',
            }).state('team.pokemon', {
                url: '/pokemon',
                templateUrl: 'team/pokemon/all.html',
                controller: 'TeamPokemonController'
            }).state('team.pokemon.view', {
                url: '/view/:index',
                templateUrl: 'team/pokemon/view.html',

            }).state('team.typechart', {
                url: '/typechart',
                templateUrl: '/app/team/templates/typechart.html'
            }).state('team.moveset_coverage', {
                url: '/moveset-coverage',
                templateUrl: 'team/moveset_coverage.html'
            })
            .state('team.settings', {
                url: '/settings',
                templateUrl: 'team/settings.html'
            }).state('team.publish', {
                url: '/publish',

                templateUrl: 'team/publish.html'
            }).state('team.pokemons', {
                url: "/pokemons",
                templateUrl: 'team/all.html'
            }).state('team.pokemon.list', {
                url: '/:group/:query',
                templateUrl: 'team/list.html'
            }).state('team.pokemon.add', {
                url: '/:pokemon/add',
                templateUrl: 'team/add.html'
            });
    });