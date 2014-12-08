angular.module("teambreweryApp").factory("Team", ["$http", "api", "$q", function($http, api, $q){
    var Team = function(data){
        this.tier = "OU";

        // this.format_rules = Rules.byFormat("OU")... (for example)
        this.pokemons = [];
        this.id = null;
        this.private = false;
        this.populate = true;

        if (typeof data !== "undefined"){
            this.tier = data.format.name;
            this.name = data.name;
            this.id = data.id;
            this.private = data.private;
            this.populate = data.populate_on_creation;
        }
        

        return this;
    }

    Team.create = function(team){
        return $http.post(api('teams/create'), team);
    }

    Team.getByID = function(id){
        return $http.get(api("team/" + id));
    }

    Team.prototype.save = function(){
        return $http.post(api('team/' + this.id + "/update"), {
            format: this.tier,
            pokemons: this.pokemons,
            private: this.private
        });
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