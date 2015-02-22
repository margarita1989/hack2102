'use strict';

(function() {
    var express,
        passport,

        HomeCtrl,
        LoginCtrl,
        BookCtrl,
        FileUploadCtrl,
        ProfileCtrl,
        router;

    express = require('express');
    passport = require('passport');

    HomeCtrl = require('controllers/HomeController');
    BookCtrl = require('controllers/BookController');
    LoginCtrl = require('controllers/LoginController');
    FileUploadCtrl = require('controllers/FileUploadController');
    ProfileCtrl = require('controllers/ProfileController');
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
        .route('/upload')
        .post(FileUploadCtrl);

    router
        .route('/profile/:userID')
        .get(ProfileCtrl);

    router
        .route('/book/:action')
        .post(BookCtrl);

    router
        .route('/login')
        .all(LoginCtrl);

    router
        .use(function(req, res) {
            res.redirect('/home');
        });

    module.exports = router;
})();