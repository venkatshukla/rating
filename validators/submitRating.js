let models = require('../models');

let validator = require('validator');


exports.validateRatings = function(errors, ratings) {

    ratings.forEach(rating => {
    
        try {
            if (!validator.isInt(rating.rating)) {
                errors.push({"rating" : "Please give a valid rating"});
            }
            if(rating.rating > 5 || rating.rating<0){
                errors.push({"rating" : "Please give a valid rating"});
            }
        } catch (error) {
                errors.push({"error" : "Invalid Data"});
        }
        
    });
    
    return errors;
}

