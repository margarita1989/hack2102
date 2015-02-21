'use strict';

(function() {
    var i18n;

    i18n = require('i18n');

    i18n.configure({
        locales:['en', 'ru'],
        directory: __dirname + '/../translations',
        defaultLocale: 'en',
        cookie: 'lang'
    });

    module.exports = i18n;
})();