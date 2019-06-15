let models = require('../models');

let validator = require('validator');


exports.validateRatings = function(errors, req) {
    try {
        if (!validator.isInt(req.body.score)) {
            errors.push({"rating" : "Please give a valid rating"});
        }
    } catch (error) {
            errors.push({"error" : "Invalid Data"});
    }
    return errors;
}

