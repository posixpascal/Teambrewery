module.exports = router;
'use strict';

var express = require('express');
var controller = require('./team.controller');

var router = express.Router();

router.get('/get/:id', controller.getTeam);
router.post('/save', controller.saveTeam)

module.exports = router;