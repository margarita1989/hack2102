'use strict';

(function() {
    var HomePageCtrl;

    HomePageCtrl = function(req, res, next) {
        res.render('home', {
            UI: {
                title: 'Home'
            }
        })
    };

    module.exports = HomePageCtrl;
})();