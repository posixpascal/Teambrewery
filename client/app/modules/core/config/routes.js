'use strict';

angular.module('core')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/templates/main/main.html',
        controller: 'MainController'
      }).state('main.teams', {
      	url: 'teams',
      	templateUrl: 'app/templates/main/teams/list.html',
      	controller: 'TeamsController'
      }).state('main.teams.new', {
      	url: '/new',
      	templateUrl: 'app/templates/main/teams/new.html',
      }).state('main.teams.community', {
      	url: '/community',
      	templateUrl: 'app/templates/main/teams/community.html'
      });
  });