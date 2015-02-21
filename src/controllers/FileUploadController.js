'use strict';

(function() {
    var fs,
        busboy,

        properties,
        User,
        FileUploaderCtrl;

    fs = require('fs');
    busboy = require('connect-busboy');

    properties = require('server.properties');
    User = require('models/User');

    FileUploaderCtrl = function(req, res) {
        var stream,
            user;

        if(req.cookies['token'] && req.cookies['logged_by']) {
            req.pipe(req.busboy);

            req.busboy.on('file', function (fieldname, file, filename) {
                stream = fs.createWriteStream(properties.env[process.env.ENV_NAME]['uploadDir'] + '/books/' + filename);
                file.pipe(stream);

                stream.on('close', function () {
                    User.findOne({'google.token': req.cookies['token']}, function(err, user) {
                        user.books.push('/books/' + filename);
                        user.save(function(err) {
                            res.json({
                                success: true
                            });
                        });
                    });
                });
            });
        } else {
            res.json({
                success: false,
                error: 401
            });
        }
    };

    module.exports = FileUploaderCtrl;
})();