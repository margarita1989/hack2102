'use strict';

(function() {
    var HomePageCtrl,
        User = require('models/User');

    HomePageCtrl = function(req, res, next) {
        var active_user;

        if(req.cookies['google_token']) {
            User.findOne({'google.token': req.cookies['google_token']}, function(err, user) {
                active_user = user;

                res.render('home', {
                    isLoggedIn: req.isAuthenticated(),
                    user: active_user,
                    UI: {
                        title: 'Bookface'
                    }
                });
            });
        } else {
            res.render('home', {
                isLoggedIn: req.isAuthenticated(),
                UI: {
                    title: 'Bookface'
                }
            });
        }
    };

    module.exports = HomePageCtrl;
})();