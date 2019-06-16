exports.setFilters = function (params) {         
    try {
        var filter = {};

        if (params.hasOwnProperty('product_id') && params.product_id !== null) {
            filter.product_id = params.product_id;
        }

        if (params.hasOwnProperty('user_id') && params.user_id !== null) {
            filter.user_id = params.user_id;
        }

        if (params.hasOwnProperty('rating') && params.rating !== null) {
            filter.rating = params.rating;
        }

        return filter;
    } catch (e) {
        console.log("error while setting filer");
         }
}
