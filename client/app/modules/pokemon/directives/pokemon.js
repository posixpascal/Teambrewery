"use strict";
    angular.module('pokemon')
    .directive('pokemonTyping', [
        function() {
            return {
                restrict: 'E',
                scope: true,
                replace: true,

                templateUrl: "pokemon/pokemon.typing.html",
                link: function(scope, element, attrs) {
                    if (attrs.pokemon) {
                        scope.pokemon = attrs.pokemon;

                    }
                }
            };
        }
    ])
    .directive('pokemonEvspread', [
        function(){
            return {
                restrict: 'E',
                scope: true,
                replace: true,
                templateUrl: 'pokemon/pokemon.evspread.html',
                link: function(scope, element, attrs){
                    if (attrs.pokemon){
                        scope.pokemon = attrs.pokemon;
                    }
                }
            };
        }
    ])
    .directive('pokemonMoves', [
        function(){
            return {
                restrict: 'E',
                scope: true,
                replace: true,
                templateUrl: 'pokemon/pokemon.moves.html',
                link: function(scope, element, attrs){
                    if (attrs.pokemon){
                        scope.pokemon = attrs.pokemon;
                    }
                }
            };
        }
    ])


;