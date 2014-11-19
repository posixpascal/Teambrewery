angular.module("teambreweryApp")
    .directive('pokemonCard', [function(){
           return {
                restrict: 'E',
                scope: true,
                replace: true,
                templateUrl: "app/pokemon/pokemon.card.html",
                link: function(scope, element, attrs){

                }
            }
        }
    ]).directive('pokemonTyping', [function(){
        return {
            restrict: 'E',
            scope: true,
            replace: true,
            templateUrl: "app/pokemon/pokemon.types.html",
            link: function(scope, element, attrs){
                if (attrs.pokemon) {
                    console.log(attrs.pokemon);
                    scope.pokemon = attrs.pokemon;
                }
            }
        }
    }]).directive('statDistribution', ['calcStat', function(calcStat){
        return {
            restrict: 'E',
            scope: true,
            replace: true,
            templateUrl: "app/pokemon/pokemon.stats.html",
            link: function(scope){
                scope.calcStat = calcStat;
            }
        }
    }])
    
    ;