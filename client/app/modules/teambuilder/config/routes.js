'use strict';

angular.module('teambuilder')
  .config(function ($stateProvider) {
    $stateProvider
      .state('teambuilder', {
        url: '/teambuilder',
        templateUrl: 'teambuilder/main.html',
        controller: 'TeambuilderController'
      });
  });