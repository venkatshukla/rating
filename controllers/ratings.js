const models = require("../models");
const { validateRatings } = require("../validators/submitRating");
const { setFilters } = require("../utils/ratings_utils");

exports.getRatings = async function(req, res, next) {
    let filter = setFilters(req.body);
    if (Object.keys(filter).length === 0 && filter.constructor === Object) {
        return res.status(500).send({
            message: "Invalid Search Parameters",
            success: false
        });
    }
    try {
        let ratings = await models.Ratings.findAll({
            where: filter
        });

        return res.send({ message: { ratings }, success: true });
    } catch (e) {
        return res.status(500).send({
            message: "Review Posting Failed with error",
            success: false
        });
    }
};

exports.addRatings = async function(req, res, next) {
    let errors = [];
    let ratingsArray = req.body.ratings;
    errors = validateRatings(errors, ratingsArray);
    if (errors.length != 0) {
        res.status(500).send({ message: errors, success: false });
    } else {
        try {
            let rating = await models.Ratings.bulkCreate(ratingsArray, {
                updateOnDuplicate: ["rating", "comment", "updatedAt"]
            });
            return res.send({
                messsage: "Rating Added success",
                success: true
            });
        } catch (error) {
            return res.status(500).send({
                message: "Review Posting Failed with error",
                success: false
            });
        }
    }
};

exports.getAvgRatings = async (req, res, next) => {
    var productIds = req.body.product_ids;
    try {
        let result = await models.Ratings.findAll({
            where: { product_id: productIds },
            group: ["product_id"],
            attributes: [
                "product_id",
                [
                    models.sequelize.fn("AVG", models.sequelize.col("rating")),
                    "ratingAvg"
                ],
                [
                    models.sequelize.fn(
                        "COUNT",
                        models.sequelize.col("user_id")
                    ),
                    "users"
                ]
            ]
        });
        return res.send({ message: result, success: true });
    } catch (error) {
        return res.status(500).send({
            message: "Review Posting Failed with error",
            success: false
        });
    }
};
