angular.module("teambreweryApp").factory("Pokemon", ["$http", function($http){
    var API_PATH = "http://localhost:3000/api/pokemon/";
    var Pokemon = function(data){
        if (typeof data !== "undefined"){

            this.baseStats = data.basestats;
            this.sprite = data.sprite_url
            this.name = data.species;
            this.types = data.typing;
            this.abilities = data.abilities;
            this.moveset = {};
            if (typeof data.movesets !== "undefined"){
                this.moveset = data.movesets[0];
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
    
    Pokemon.prototype.getTyping = function(){
        return this.request_data.typing;
    }
    
    Pokemon.get = function(identifier){
        return $http.get(API_PATH + identifier, function(data){
            return new Pokemon(data);
        });
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