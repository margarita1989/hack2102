'use strict';

(function() {
    var ProfileCtrl,
        User;

    User = require('models/User');

    ProfileCtrl = function(req, res, next) {
        function getUser(userID, user) {
            User.findOne({'customID': userID}, function(err, user_profile) {
                res.render('profile', {
                    isLoggedIn: (user_profile) ? true : false,
                    user: user || {},
                    user_profile: user_profile
                });
            });
        }

        if(req.cookies['token']) {
            User.findOne({'google.token': req.cookies['token']}, function(err, user) {
                getUser(req.params['userID'], user);
            });
        } else {
            getUser(req.params['userID']);
        }
    };

    module.exports = ProfileCtrl;
})();