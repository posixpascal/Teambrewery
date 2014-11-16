'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PokemonSchema = new Schema({
  name: String,
  image: String,
  
  pokedex: Number,
  name_id: String,
  
  
  types: [{
      type: String,
  }],
  
  baseHP: Number,
  baseATK: Number,
  baseDEF: Number,
  baseSPA: Number,
  baseSPD: Number,
  baseSPE: Number,
  color: String,
  
  abilities: [{
      ability: String,
  }],
  
  heightm: Number,
  weightkg: Number
  
});

module.exports = mongoose.model('Pokemon', PokemonSchema);