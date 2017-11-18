var data = require('../data/homepage.json');
var express = require('express');
var mustache = require('mustache');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', data);
});

module.exports = router;
