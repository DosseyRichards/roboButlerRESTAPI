var express = require('express');
var router = express.Router();
var shell = require('shelljs');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/move-forward', function(req, res, next) {
  shell.exec('python goforward.py');
  shell.exec('kill');
});



router.get('/turn-around-move-forward', function(req, res, next) {
  shell.exec('turnaround.py');
});


module.exports = router;
