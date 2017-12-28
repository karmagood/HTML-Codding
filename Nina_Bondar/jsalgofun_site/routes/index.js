var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'JS algorithms and other weird stuff', autoscroll_target: 'go-brief'});
});

module.exports = router;
