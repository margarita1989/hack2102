'use strict';

(function() {
    var i18n,
        handlebars;

    i18n = require('i18n');
    handlebars = require('hbs');

    i18n.configure({
        locales:['en', 'ru'],
        directory: __dirname + '/../translations',
        defaultLocale: 'en',
        cookie: 'lang'
    });

    handlebars.registerHelper('__', function () {
        return i18n.__.apply(this, arguments);
    });

    handlebars.registerHelper('__n', function () {
        return i18n.__n.apply(this, arguments);
    });

    module.exports = i18n;
})();