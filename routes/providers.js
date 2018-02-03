var express = require('express');
var router = express.Router();
var orm = require('../data/orm');

/* GET Providers List */
router.get('/', function(req, res) {  
    orm.Provider.findAll().then( providers =>
    {
        res.send(providers);
    })
});

/* GET Provider By Id. */
router.get('/:providerId', function(req, res) {
    var requestedProvider = req.params["providerId"];
    orm.Provider.find({
            where: {
                providerId: requestedProvider
            }
        }).then(
        providers =>
        {
            res.send(providers);
        }
    )
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
