'use strict';

(function() {
    var mongoose,

        BookSchema;

    mongoose = require('mongoose');

    BookSchema = mongoose.Schema({
        customID: Number,
        rating: Number,
        name: String,
        url: String,
        owner_id: Number,
        comments: Array
    });

    module.exports = mongoose.model('Book', BookSchema);
})();