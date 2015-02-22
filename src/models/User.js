'use strict';

(function() {
    var mongoose,

        UserSchema;

    mongoose = require('mongoose');

    UserSchema = new mongoose.Schema({
        google: {
            id: Number,
            token : String,
            email : String,
            name : String,
            image: String
        },
        customID : Number
    });

    module.exports = mongoose.model('User', UserSchema);
})();