'use strict';

(function() {
    var mongoose,
        passport,
        GoogleStrategy,

        properties,
        AuthCtrl,
        User;

    mongoose = require('mongoose');
    passport = require('passport');
    GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

    properties = require('server.properties');
    User = require('models/User');
    AuthCtrl = require('controllers/AuthController');

    mongoose.connect(properties['env'][process.env.ENV_NAME]['dbUrl']);

    passport.use('google', new GoogleStrategy(
        {
            clientID: properties['social']['google']['clientID'],
            clientSecret: properties['social']['google']['clientSecret'],
            callbackURL: properties['env'][process.env.ENV_NAME]['baseUrl'] + '/auth/google/return'
        }, AuthCtrl.Google
    ));

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });
})();