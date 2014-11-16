'use strict';

angular.module('teambreweryApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('team', {
        url: '/team/:id',
        controller: 'TeamCtrl'
      });
  });