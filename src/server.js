'use strict';

(function() {
    var express,
        session,
        busboy,
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
    busboy = require('connect-busboy');

    server = express();

    handlebars.registerPartials(__dirname + '/../www/partials/');

    server
        .set('views', __dirname + '/../www/views/')
        .set('view engine', 'hbs')

        .use(busboy())
        .use(cookieParser())
        .use(bodyParser.json())
        .use(bodyParser.urlencoded({extended: true}))
        .use(express.static(__dirname + '/../www/ROOT/'))
        .use(express.static(__dirname + '/../www/files/'))
        .use(session({
            secret: '123',
            resave: true,
            saveUninitialized: true
        }))
        .use(passport.initialize())
        .use(passport.session());

    module.exports = server;
})();