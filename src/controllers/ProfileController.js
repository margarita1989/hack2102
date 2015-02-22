'use strict';

(function() {
    var ProfileCtrl,
        UserDTO,
        User;

    User = require('models/User');
    UserDTO = require('utils/UserDTO');

    ProfileCtrl = function(req, res, next) {
        var newUserDTO;

        function getUser(userID, user) {
            User.findOne({'customID': userID}, function(err, user_profile) {
                res.render('profile', {
                    isLoggedIn: (user) ? true : false,
                    user: user || null,
                    user_profile: user_profile
                });
            });
        }

        if(req.cookies['token']) {
            newUserDTO = new UserDTO({'google.token': req.cookies['token']}, function(err, user) {
                getUser(req.params['userID'], user);
            });
        } else {
            getUser(req.params['userID']);
        }
    };

    module.exports = ProfileCtrl;
})();