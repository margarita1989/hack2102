'use strict';

(function() {
    var HomePageCtrl;

    HomePageCtrl = function(req, res, next) {
        res.render('home', {
            UI: {
                title: 'Bookface'
            }
        })
        angular.module('app', [
            'lr.upload'
        ]);
    };

    module.exports = HomePageCtrl;
})();