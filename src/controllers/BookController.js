'use strict';

(function() {
    var BookCtrl,
        Book,
        User;

    Book = require('models/Book');
    User = require('models/User');

    BookCtrl = function(req, res, next) {
        var action,
            actions;

        actions = {};
        action = req.params['action'];

        actions.rating = function(req, res, next) {
            var id;

            id = req.body['id'] || 0;

            Book.findOne({customID: id}, function(err, book) {
                book.rating = req.body['rating'];

                book.save(function() {
                    res.json({
                        success: true
                    })
                })
            })
        };

        try {
            actions[action](req, res, next);
        } catch (err) {
            res.json(err);
        }


    };

    module.exports = BookCtrl;
})();