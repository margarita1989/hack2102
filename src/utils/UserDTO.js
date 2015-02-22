'use strict';

(function() {
    var User,
        Book,

        UserDTO;

    User = require('models/User');
    Book = require('models/Book');

    UserDTO = function(query, callback) {
        this.getUser(query, callback);
    };

    UserDTO.prototype = {
        getUser: function(query, callback) {
            var instance = this;

            User.findOne(query, function(err, user) {
                instance.id = user.customID;
                instance.google = user.google;

                instance.getBooks(callback);
            });
        },
        getBooks: function(callback) {
            var instance = this;

            Book.find({owner_id: instance.id}, function(err, books) {
                instance.books = books;

                callback();
            });
        }
    };

    module.exports = UserDTO;
})();