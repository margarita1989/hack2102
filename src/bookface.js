'use strict';

(function() {
    var i18n,

        bookFace,
        server,
        router,
        properties;

    i18n = require('i18n');

    require('config/passport');
    require('config/modules');

    bookFace = (function() {
        server = require('server');
        router = require('router');
        properties = require('server.properties').env[process.env['ENV_NAME']];

        server.use(router);
        server.use(i18n.init);

        return {
            httpServer: server,
            properties: properties
        };
    })();

    module.exports = bookFace;
})();