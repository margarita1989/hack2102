'use strict';

(function() {
    var express,

        HomeController,
        router;

    express = require('express');

    HomeController = require('controllers/HomeController');
    router = express.Router();

    router
        .route('/home')
        .get(HomeController);

    router
        .use(function(req, res) {
            res.redirect('/home');
        });

    module.exports = router;
})();