var express = require('express');
var actions = require('../methods/actions');

var router = express.Router();

router.post('/authenticate', actions.authenticate);
router.post('/adduser', actions.addNew);
router.get('/api/reviews', actions.getReview)
router.post('/api/reviews', actions.postReview)




module.exports = router;