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
                        return done(user);
                    } else {
                        newUser = new User(profile._json);
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