'use strict';

(function() {
    var bookFace,
        server,
        router,
        properties;

    bookFace = (function() {
        server = require('server');
        router = require('router');
        properties = require('server.properties').env[process.env['ENV_NAME']];

        server.use(router);

        return {
            httpServer: server,
            properties: properties
        };
    })();

    module.exports = bookFace;
})();