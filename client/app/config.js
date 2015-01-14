'use strict';


// Init the application configuration module for AngularJS application
var ApplicationConfiguration = (function() {
    // Init module configuration options
    var applicationModuleName = 'qamzApp';
    var applicationModuleVendorDependencies = ['ionic', 'ngCordova'];

    // Add a new vertical module
    var registerModule = function(moduleName) {
        // Create angular module
        angular
            .module(moduleName, [
                'ngCookies',
                'ngResource',
                'ngSanitize',
                'ng-token-auth',
                'ui.router',
                'ui.bootstrap',
                'angular-loading-bar',
                'cgNotify',
                'smart-table',

                // teambrewery modules
                'team',
                'pokedex',
                'main',
                'pokemon'
            ]);

        // Add the module to the AngularJS configuration file
        angular
            .module(applicationModuleName)
            .requires
            .push(moduleName);


    };

    return {
        applicationModuleName: applicationModuleName,
        applicationModuleVendorDependencies: applicationModuleVendorDependencies,
        registerModule: registerModule
    };
})();