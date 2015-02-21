'use strict';

(function() {
    var LoginCtrl,
        User = require('models/User');

    LoginCtrl = function(req, res, next) {
        if(req.user) {
            User.findById(req.user.id, function(err, user) {
                res.cookie('logged_by', 'google', {httpOnly: true});
                res.cookie('access_token', user.google.token, {httpOnly: true});

                res.cookie('token', user.google.token, {
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