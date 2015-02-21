'use strict';

(function() {
    var HomePageCtrl,
        User = require('models/User');

    HomePageCtrl = function(req, res, next) {
        if(req.cookies['token']) {
            User.findOne({'google.token': req.cookies['token']}, function(err, user) {
                res.render('home', {
                    isLoggedIn: true,
                    user: user,
                    UI: {
                        title: 'Bookface'
                    }
                });
            });
        } else {
            res.render('home', {
                isLoggedIn: false,
                UI: {
                    title: 'Bookface'
                }
            });
        }
    };

    module.exports = HomePageCtrl;
})();