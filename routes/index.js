var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.all('/*', function (req, res, next) {
  console.log("Call on path: " + req.path + " with body: " + 
  req.body + " and headers: " + req.headers);
  next();
});

module.exports = router;
