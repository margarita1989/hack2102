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
            newUserDTO = new UserDTO({'customID': userID}, function(err, user_profile) {
                res.render('profile', {
                    isLoggedIn: (user) ? true : false,
                    user: user || null,
                    user_profile: newUserDTO,
                    bookFaceJSON: JSON.stringify({
                        isLoggedIn: (user) ? true : false,
                        user: user || null,
                        user_profile: newUserDTO
                    })
                });
            });
        }

        if(req.cookies['token']) {
            newUserDTO = new UserDTO({'google.token': req.cookies['token']}, function() {
                getUser(req.params['userID'], newUserDTO);
            });
        } else {
            getUser(req.params['userID']);
        }
    };

    module.exports = ProfileCtrl;
})();