'use strict';

(function() {
    var fs,
        busboy,

        properties,
        User,
        FileUploaderCtrl,

        options;

    fs = require('fs');
    busboy = require('connect-busboy');

    properties = require('server.properties');
    User = require('models/User');

    options = properties['uploader'];

    FileUploaderCtrl = function(req, res) {
        var stream,
            user;

        if(req.cookies['token'] && req.cookies['logged_by']) {
            req.pipe(req.busboy);

            req.busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
                if(options['allowedTypes'].indexOf(mimetype) !== -1) {
                    stream = fs.createWriteStream(
                        properties.env[process.env.ENV_NAME]['uploadDir'] +
                        '/books/' + filename.split('.')[0] +
                        '?t=' + (new Date).getTime() + '.' +
                        filename.split('.')[1]
                    );

                    file.pipe(stream);

                    stream.on('close', function () {
                        User.findOne({'google.token': req.cookies['token']}, function(err, user) {
                            user.books.push('/books/' + filename);
                            user.save(function(err) {
                                res.json({
                                    success: true,
                                    user: user
                                });
                            });
                        });
                    });
                } else {
                    res.json({
                        success: false,
                        error: 'Mime type ' + mimetype + ' not allowed!',
                        mimeType: mimetype
                    })
                }
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