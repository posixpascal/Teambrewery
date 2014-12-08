angular.module("teambreweryApp").factory("Pokemon", ["$http", "api", function($http, api){
    
    var Pokemon = function(data){
        if (typeof data !== "undefined"){

            this.baseStats = data.basestats;
            this.basestats = data.basestats; // ugh. terrible...
            
            this.sprite = data.sprite_url
            this.name = data.species;
            this.types = data.typing;
            this.abilities = data.abilities;
            this.moveset = {};
            this.moves = [];
            this.id = data.id;
            if (typeof data.movesets !== "undefined"){
                this.moveset = data.movesets[0];
                if (typeof this.moveset !== "undefined"){
                    this.moves = this.moveset.moves;
                }
            } 

            if (this.moves.length == 0 && typeof data.random_battle_moves !== "undefined") { // use random moves instead.
                this.moves = data.random_battle_moves;
            }
            if (typeof data.nature !== "undefined"){
                this.moveset.nature = data.nature;
            }
            if (typeof data.ev_spread !== "undefined"){
                this.moveset.ev_spread = data.ev_spread;
            }
            this.request_data = data;
        }
        return this;
    };

    Pokemon.getRandomByFormat = function(format){
        return Pokemon.get('pokemon/random/format/' + format);
    }

    Pokemon.prototype.getSprite = function(){
        return this.sprite;
    }
    
    Pokemon.byID = function(id){
        return Pokemon.get('pokemon/id/' + id)
    }

    Pokemon.prototype.getTyping = function(){
        return this.request_data.typing;
    }
    
    Pokemon.get = function(identifier){
        return $http.get(api(identifier));
    }
    
    Pokemon.getRandomOU = function(){
        return Pokemon.get('pokemon/random/format/ou');
    }

    Pokemon.autocomplete = function(name){
        return $http.get(api("pokemon/autocomplete/" + name));
    }
    
    
    return Pokemon;
}]).value('EVStats', {
	HP: 'hp',
	hp: 'hp',
	Atk: 'atk',
	atk: 'atk',
	Def: 'def',
	def: 'def',
	SpA: 'spa',
	SAtk: 'spa',
	SpAtk: 'spa',
	spa: 'spa',
	SpD: 'spd',
	SDef: 'spd',
	SpDef: 'spd',
	spd: 'spd',
	Spe: 'spe',
	Spd: 'spe',
	spe: 'spe'
});