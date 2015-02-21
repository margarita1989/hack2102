'use strict';

(function() {
    var AuthCtrl,
        User;

    User = require('models/User');

    AuthCtrl = (function() {

        return {
            Google: function(token, refreshToken, profile, done) {
                var newUser;

                User.findOne({'google.id': profile._json.id}, function(err, user) {
                    if(err) {
                        return done(err);
                    } else if(user) {
                        return done(null, user);
                    } else {
                        newUser = new User();
                        newUser.google.id = profile._json.id;
                        newUser.google.image = profile._json.picture;
                        newUser.google.name = profile._json.name;
                        newUser.google.email = profile._json.email;
                        newUser.google.token = token;

                        newUser.save(function(err) {
                            if(err) {
                                throw err;
                            }
                            return done(null, newUser);
                        });
                    }
                });
            }
        };
    })();

    module.exports = AuthCtrl;
})();