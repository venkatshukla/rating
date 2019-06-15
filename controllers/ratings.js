const models = require("../models");
const { validateRatings } = require("../validators/submitRating");

exports.getRatings = function(req, res, next) {
    
};

exports.submitRatings = function(req, res, next) {
    let errors = [];
    errors = validateRatings(errors, req);
    if (errors.length != 0) {
        res.status(500).send({ message: errors, success: false });
    } else {
        return models.Ratings.create({
            product_id: req.body.productId,
            user_id: req.body.userId,
            rating: req.body.score,
            comment: req.body.message ? req.body.message : "No Comments Added"
        })
            .then(rating => {
                return res.send({
                    messsage: "Rating Added success",
                    success: true
                });
            })
            .catch(function(e) {
                return res
                    .status(500)
                    .send({
                        message: "Review Posting Failed with error" + e,
                        success: false
                    });
            });
    }
};
