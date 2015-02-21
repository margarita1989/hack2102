'use strict';

(function() {
    var mongoose,

        BookSchema;

    mongoose = require('mongoose');

    BookSchema = mongoose.Schema({

    });

    module.exports = mongoose.model('Book', BookSchema);
})();