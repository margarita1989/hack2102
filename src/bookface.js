'use strict';

(function() {
    var passport,

        bookFace,
        server,
        router,
        properties;

    passport = require('passport');
    require('config/passport');

    bookFace = (function() {
        server = require('server');
        router = require('router');
        properties = require('server.properties').env[process.env['ENV_NAME']];

        server.use(passport.initialize());
        server.use(passport.session());
        server.use(router);

        return {
            httpServer: server,
            properties: properties
        };
    })();

    module.exports = bookFace;
})();