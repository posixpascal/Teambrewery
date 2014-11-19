'use strict';

var _ = require('lodash');
var Team = require('./team.model');


exports.getTeam = function(req, res){
    var id = req.params.id;
    Team.find({
        _id: id
    }, function(err, team){
        if (err) return handleError(res, err);
        res.json(200, team);
    })
}
exports.saveTeam = function(req, res) {
    var team = new Team({
        team: req.body.team
    });
    team.save(function(err, team){
        if (err) return handleError(res, err);
        res.json(200, team);
    })
    
};


function handleError(res, err) {
  return res.send(500, err);
}