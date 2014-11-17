/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /pokemon              ->  index
 * POST    /pokemon              ->  create
 * GET     /pokemon/:id          ->  show
 * PUT     /pokemon/:id          ->  update
 * DELETE  /pokemon/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Pokemon = require('./pokemon.model');

// Get list of pokemon
exports.index = function(req, res) {
  Pokemon.find(function (err, pokemons) {
    if(err) { return handleError(res, err); }
    return res.json(200, pokemons);
  });
};

// get pokemons by name
exports.byName = function(req, res){
    Pokemon.find({name: new RegExp('^.*' + req.params.name + '.*$', 'i')}, function(err, pokemons){
       if (err) { return handleError(res, err); }
       return res.json(200, pokemons); 
    });
}

// Get a single pokemon
exports.show = function(req, res) {
  Pokemon.find({pokedex: parseInt(req.params.id, 10)}, function (err, pokemon) {
      if (Array.isArray(pokemon)){ pokemon = pokemon[0]; }
    if(err) { return handleError(res, err); }
    if(!pokemon) { return res.send(404); }
    return res.json(pokemon);
  });
};

// Creates a new pokemon in the DB.
exports.create = function(req, res) {
  Pokemon.create(req.body, function(err, pokemon) {
    if(err) { return handleError(res, err); }
    return res.json(201, pokemon);
  });
};

// Updates an existing pokemon in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Pokemon.findById(req.params.id, function (err, pokemon) {
    if (err) { return handleError(res, err); }
    if(!pokemon) { return res.send(404); }
    var updated = _.merge(pokemon, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, pokemon);
    });
  });
};

// Deletes a pokemon from the DB.
exports.destroy = function(req, res) {
  Pokemon.findById(req.params.id, function (err, pokemon) {
    if(err) { return handleError(res, err); }
    if(!pokemon) { return res.send(404); }
    pokemon.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}