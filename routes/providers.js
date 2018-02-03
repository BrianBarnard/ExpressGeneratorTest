var express = require('express');
var router = express.Router();

var dataAccess = require('../data/DataAccess');

/* GET Providers List */
router.get('/', function(req, res) {
  var providers = dataAccess.Read();
  res.send(providers);
});

/* GET Provider By Id. */
router.get('/:providerId', function(req, res) {
    res.send("Get me providerId: " + req.params["providerId"]);
});

/* POST Provider*/
router.post('/', function(req, res) {
    res.send("#Posting");
});

  /* GET Provider By Id. */
router.get('/:providerId', function(req, res) {
    res.send(req.params);
});

  /* GET Provider By Id. */
router.get('/:providerId', function(req, res) {
    res.send(req.params);
});

module.exports = router;
