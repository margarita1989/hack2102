'use strict';

(function() {
    var express,
        session,
        bodyParser,
        cookieParser,
        handlebars,
        passport,

        server;

    session = require('express-session');
    express = require('express');
    bodyParser = require('body-parser');
    cookieParser = require('cookie-parser');
    handlebars = require('hbs');
    passport = require('passport');

    server = express();

    handlebars.registerPartials(__dirname + '/../www/partials/');

    server
        .set('views', __dirname + '/../www/views/')
        .set('view engine', 'hbs')

        .use(cookieParser())
        .use(bodyParser.json())
        .use(bodyParser.urlencoded({extended: true}))
        .use(express.static(__dirname + '/../www/ROOT'))
        .use(session({
            secret: '123',
            resave: true,
            saveUninitialized: true
        }))
        .use(passport.initialize())
        .use(passport.session());

    module.exports = server;
})();