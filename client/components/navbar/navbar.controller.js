'use strict';
angular.module('teambrewery')
  .controller('NavbarController', ['$scope', '$location', '$auth', function ($scope, $location, $auth) {
    $scope.$auth = $auth;

    $scope.menu = [
      {
        'title': 'About',
        'link': '#!/main/about',
        'color': 'blue'
      },

      {
        'title': 'Teambuilder',
        'link': '#!/teambuilder',
        'color': 'red'
      },

      {
        'title': 'Community',
        'link': '#!/community',
        'color': 'yellow'
      },

      {
        'title': 'Pokedex',
        'link': '#!/pokedex',
        'color': 'orange'
      },


    /*,
    {
        'title': 'Community Teams',
        'link': '#!/teams/community'
    },
    {
      'title': 'Pokedex',
      'link': '#!/pokedex'
    }*/
    
    ];

    $scope.isActive = function(route) {
      return route === ("#!" + $location.path());
    };
  }]);