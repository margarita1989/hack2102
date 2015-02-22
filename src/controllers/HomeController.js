'use strict';

(function() {
    var HomePageCtrl,
        UserDTO,
        User;

    UserDTO = require('utils/UserDTO');
    User = require('models/User');

    HomePageCtrl = function(req, res, next) {
        var newUserDTO;

        if(req.cookies['token']) {
            newUserDTO = new UserDTO({'google.token': req.cookies['token']}, function() {
                res.render('home', {
                    isLoggedIn: true,
                    user: newUserDTO,
                    bookFaceJSON: JSON.stringify({
                        user: newUserDTO,
                        isLoggedIn: true
                    })
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