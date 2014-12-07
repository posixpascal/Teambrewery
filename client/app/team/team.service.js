angular.module("teambreweryApp").factory("Team", ["$http", function($http){
    var Team = function(){
        this.tier = "OU";
        // this.format_rules = Rules.byFormat("OU")... (for example)
        this.pokemons = [];
        this.id = null;



        

        return this;
    }

    Team.prototype.addPokemon = function(pokemon){
        // if (this.format_rules["speciesClause"]){ if this.pokemons.indexOf(pokemon) > -1) return false; }
        // example on how to add format rules in the future.
        this.pokemons.push(pokemon);
    }

    Team.prototype.getPokemon = function(){
        return this.pokemons;
    }


    return Team;
}])