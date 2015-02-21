'use strict';

(function() {
    var LoginCtrl;

    LoginCtrl = function(req, res, next) {
        res.render('home', {
            UI: {
                title: 'Home'
            }
        });
    };

    module.exports = LoginCtrl;
})();