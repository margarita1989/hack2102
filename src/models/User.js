'use strict';

(function() {
    var mongoose,

        UserSchema;

    mongoose = require('mongoose');

    UserSchema = new mongoose.Schema({
        google: {
            token : String,
            email : String,
            name : String,
            image: String
        },
        customID : Number,
        books: Array
    });

    module.exports = mongoose.model('User', UserSchema);
})();