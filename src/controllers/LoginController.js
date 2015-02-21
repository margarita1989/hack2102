'use strict';

(function() {
    var LoginCtrl,
        User = require('models/User');

    LoginCtrl = function(req, res, next) {
        if(req.user) {
            User.findOne({'google.id': req.user.google.id}, function(err, user) {
                res.cookie('google_token', user.google.token, {
                    httpOnly: true
                });
                res.redirect('home');
            });
        } else {
            res.redirect('home');
        }
    };

    module.exports = LoginCtrl;
})();