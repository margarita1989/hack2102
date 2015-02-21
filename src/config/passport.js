'use strict';

(function() {
    var mongoose,
        passport,
        GoogleStrategy,

        AuthCtrl,
        User;

    mongoose = require('mongoose');
    passport = require('passport');
    GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
    User = require('models/User');

    mongoose.connect('mongodb://localhost:27017/bookface');

    AuthCtrl = require('controllers/AuthController');

    passport.use('google', new GoogleStrategy(
        {
            clientID: '310542448244-l6brplovbn5vhabhuik3f6pvvm7mqck9.apps.googleusercontent.com',
            clientSecret: 'RZB3oIa3k-9WPLawfSfDq4Vh',
            callbackURL: 'http://localhost:3000/auth/google/return'
        }, AuthCtrl.Google
    ));

    passport.serializeUser(function(user, done) {
        done(null, user.google.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findOne({'google.id': id}, function(err, user) {
            done(err, user);
        });
    });
})();