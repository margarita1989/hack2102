'use strict';

(function() {
    var HomePageCtrl,
        User;

    User = require('models/User');

    HomePageCtrl = function(req, res, next) {
        if(req.cookies['token']) {
            User.findOne({'google.token': req.cookies['token']}, function(err, user) {
                res.render('home', {
                    isLoggedIn: true,
                    user: user
                });
            });
        } else {
            res.render('home', {
                isLoggedIn: false
            });
        }
    };

    module.exports = HomePageCtrl;
})();