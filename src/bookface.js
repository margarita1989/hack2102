'use strict';

(function() {
    var handlebars,

        i18n,
        bookFace,
        server,
        router,
        properties;

    handlebars = require('hbs');
    i18n = require('config/i18n');

    require('config/passport');

    bookFace = (function() {
        server = require('server');
        router = require('router');
        properties = require('server.properties').env[process.env['ENV_NAME']];

        server.use(router);
        server.use(i18n.init);

        handlebars.registerHelper('__', function () {
            return i18n.__.apply(this, arguments);
        });
        handlebars.registerHelper('__n', function () {
            return i18n.__n.apply(this, arguments);
        });

        return {
            httpServer: server,
            properties: properties
        };
    })();

    module.exports = bookFace;
})();