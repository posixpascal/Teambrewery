'use strict';

angular.module('core')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'main/main.html',
        controller: 'MainController'
      }).state('main.teams', {
      	url: 'teams',
      	templateUrl: 'main/teams/list.html',
      	controller: 'TeamsController'
      }).state('main.teams.community', {
      	url: '/community',
      	templateUrl: 'main/teams/community.html'
      });
  });