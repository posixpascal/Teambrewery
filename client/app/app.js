'use strict';

angular
    .module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies);

angular
    .module(ApplicationConfiguration.applicationModuleName)
    .config(['$locationProvider',
        function($locationProvider) {
            $locationProvider.html5Mode(true);
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



angular
    .element(document)
    .ready(function() {
 
        if (window.location.hash === '#_=_') {
            window.location.hash = '#!';
        }

        angular
                .bootstrap(document, [ApplicationConfiguration.applicationModuleName]);
    });