angular.module("teambreweryApp").service("Pokemon", ["$http", function($http){
    return {
        byPokedexID: function(id){
            return $http.get("/api/pokemon/" + id).success(function(pokemon){
               return pokemon; 
            });
        }
    }
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