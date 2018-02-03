var express = require('express');
var router = express.Router();

/* GET Provider By Id. */
router.get('/providers/:providerId', function(req, res) {
  res.send(req.params);
});

module.exports = router;
