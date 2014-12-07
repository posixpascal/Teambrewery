'use strict';

angular.module('teambreweryApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('teambuilder', {
          url: '/teambuilder/:id',
          templateUrl: '/app/team/templates/team.html',
          controller: 'TeamCtrl'
      }).state('teambuilder.typechart', {
          url: '/typechart',
          controller: 'TeamCtrl',
          templateUrl: '/app/team/templates/typechart.html'
      }).state('teambuilder.settings', {
        url: '/settings',
        controller: 'TeamCtrl',
        templateUrl: '/app/team/templates/settings.html'
      }).state('teambuilder.publish', {
        url: '/publish',
        controller: 'TeamCtrl',
        templateUrl: '/app/team/templates/publish.html'
      })
  });