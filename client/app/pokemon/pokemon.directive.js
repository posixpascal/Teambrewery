angular.module("teambreweryApp")
    .directive('pokemonCard', [function(){
           return {
                restrict: 'E',
                scope: {},
                replace: true,
                templateUrl: "app/pokemon/pokemon.card.html",
                link: function(scope, element, attrs){
                    scope.pokemon = attrs.pokemon;
                }
            }
        }
    ]).directive('pokemonType', [function(){
        return {
            restrict: 'E',
            scope: {},
            replace: true,
            templateUrl: "app/pokemon/pokemon.types.html",
            link: function(scope, element, attrs){
                scope.type = [attrs.primaryType, attrs.secondaryType || null];
            }
        }
    }])
    
    ;