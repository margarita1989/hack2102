'use strict';

(function() {
    var express,
        bodyParser,
        cookieParser,
        handlebars,

        server;

    express = require('express');
    bodyParser = require('body-parser');
    cookieParser = require('cookie-parser');
    handlebars = require('hbs');

    server = express();

    server
        .set('views', __dirname + '/../www/views/')
        .set('view engine', 'hbs')

        .use(bodyParser.json())
        .use(bodyParser.urlencoded({extended: true}))
        .use(cookieParser());

    module.exports = server;
})();