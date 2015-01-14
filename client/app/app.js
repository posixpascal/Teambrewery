'use strict';

angular
    .module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies);

angular
    .module(ApplicationConfiguration.applicationModuleName)
    .config(['$locationProvider',
        function($locationProvider) {
            $locationProvider.hashPrefix('!');
        }
    ]).config(function($authProvider) {
        $authProvider.configure({
            'apiUrl': 'http://teambrewery.dev:3333',
            'authProviderPaths': {
                facebook: '/auth/facebook',
                twitter: '/auth/twitter'
            }

        });
    });