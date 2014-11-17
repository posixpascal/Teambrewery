/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Pokemon = require('../api/pokemon/pokemon.model');
var request = require("request");
var pokedex = require('../pokedex').BattlePokedex;

var pokemons = Object.keys(pokedex);
for (var i = 0, len = pokemons.length; i < len; i++){
    var pokemon = pokedex[pokemons[i]];
    var pokemonType = [];
    
    pokemonType.push(pokemon.types[0]);
    if (pokemon.types.length > 1){
        pokemonType.push(pokemon.types[1]);
    }
    
    var pokemonAbilities = [];
    for (var j = 0, _len = Object.keys(pokemon.abilities).length; j < _len; j++){
        var k = "-"; 
        pokemonAbilities.push(0);
    }
    


    var dbPokemon = Pokemon({
        name: pokemon.species,
        image: "" + pokemons[i] + ".gif",
        types: pokemonType,
        pokedex: pokemon.num,
        name_id: pokemons[i],
        baseHP: pokemon.baseStats.hp,
        baseATK: pokemon.baseStats.atk,
        baseDEF: pokemon.baseStats.def,
        baseSPA: pokemon.baseStats.spa,
        baseSPD: pokemon.baseStats.spd,
        baseSPE: pokemon.baseStats.spe,
        abilities: pokemonAbilities,
        color: pokemon.color,
        weightkg: pokemon.weightkg,
        heightm: pokemon.heightm
    });
    

        dbPokemon.save(function(err, u){
            if (err) return;
            console.log("Added poke");
        });

    
}