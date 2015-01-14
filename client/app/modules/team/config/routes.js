'use strict';

angular.module('team')
    .config(function($stateProvider) {
        $stateProvider
            .state('team', {
                url: '/team/:id',
                templateUrl: 'app/templates/team/team.html',
                controller: 'TeamController',
            }).state('team.pokemon', {
                url: '/pokemon',
                templateUrl: 'app/templates/team/pokemon/all.html',
                controller: 'TeamPokemonController'
            }).state('team.pokemon.view', {
                url: '/view/:index',
                templateUrl: 'app/templates/team/pokemon/view.html',

            }).state('team.typechart', {
                url: '/typechart',
                templateUrl: '/app/team/templates/typechart.html'
            }).state('team.moveset_coverage', {
                url: '/moveset-coverage',
                templateUrl: 'app/templates/team/moveset_coverage.html'
            })
            .state('team.settings', {
                url: '/settings',
                templateUrl: 'app/templates/team/settings.html'
            }).state('team.publish', {
                url: '/publish',

                templateUrl: 'app/templates/team/publish.html'
            }).state('team.pokemons', {
                url: "/pokemons",
                templateUrl: 'app/templates/team/all.html'
            }).state('team.pokemon.list', {
                url: '/:group/:query',
                templateUrl: 'app/templates/team/list.html'
            }).state('team.pokemon.add', {
                url: '/:pokemon/add',
                templateUrl: 'app/templates/team/add.html'
            });
    });