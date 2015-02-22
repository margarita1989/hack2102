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

        actions.comment = function(req, res, next) {
            var id;

            if(!req.cookies['token']) {
                res.json({
                    success: false,
                    error: 401
                });

                return 0;
            }

            id = req.body['id'];

            Book.findOne({customID: id}, function(err, book) {
                User.findOne({'google.token': req.cookies['token']}, function(err, user) {
                    book.comments.push({
                        comment: req.body['comment'],
                        user: {
                            name: user.google.name,
                            profileURL: '/profile/' + user.customID
                        }
                    });

                    book.save(function() {
                        res.json({
                            success: true
                        })
                    })
                });
            });
        };

        actions.rating = function(req, res, next) {
            var id;

            if(!req.cookies['token']) {
                res.json({
                    success: false,
                    error: 401
                });

                return 0;
            }

            id = req.body['id'] || 0;

            Book.findOne({customID: id}, function(err, book) {
                book.rating = req.body['rating'];

                book.save(function() {
                    res.json({
                        success: true
                    })
                })
            });
        };

        try {
            actions[action](req, res, next);
        } catch (err) {
            res.json(err);
        }


    };

    module.exports = BookCtrl;
})();