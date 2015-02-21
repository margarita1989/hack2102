'use strict';

(function() {
    var express,
        passport,

        HomeCtrl,
        LoginCtrl,
        router;

    express = require('express');
    passport = require('passport');

    HomeCtrl = require('controllers/HomeController');
    LoginCtrl = require('controllers/LoginController');
    router = express.Router();

    router
        .route('/home')
        .get(HomeCtrl);

    router
        .route('/auth/google')
        .get(passport.authenticate('google', { scope : ['profile', 'email'] }));

    router
        .route('/auth/google/return')
        .get(passport.authenticate('google', {
            successRedirect : '/login',
            failureRedirect : '/login'
        }));

    router
        .route('/login')
        .all(LoginCtrl);

    router
        .use(function(req, res) {
            res.redirect('/home');
        });

    module.exports = router;
})();