'use strict';

(function() {
    var mongoose,

        UserSchema;

    mongoose = require('mongoose');

    UserSchema = mongoose.Schema({
        google: {
            id : String,
            token : String,
            email : String,
            name : String,
            image: String
        }
    });

    module.exports = mongoose.model('User', UserSchema);
})();