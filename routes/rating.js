var express = require('express');
var router = express.Router();

/* GET users listing. */
let ratings = require('../controllers/ratings');

router.get('/', ratings.getRatings);
router.post('/',ratings.submitRatings);
module.exports = router;
