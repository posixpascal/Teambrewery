'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TeamSchema = new Schema({
    team: String
});

module.exports = mongoose.model('Team', TeamSchema);