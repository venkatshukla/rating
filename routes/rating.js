var express = require('express');
var router = express.Router();

/* GET product ratings. */
let ratings = require('../controllers/ratings');

router.post('/getRatings', ratings.getRatings);
router.post('/getAvgRatings', ratings.getAvgRatings);
router.post('/addRatings',ratings.addRatings);
module.exports = router;
