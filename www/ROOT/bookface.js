define([
    'angular',
    'angular-route',
    'angular-translate'
], function(angular, angularRoute, angularTranslate) {
    var bookFace;

    bookFace = angular.module('bookFace', [
        'ngRoute',
        'pascalprecht.translate'
    ]);

    angular.bootstrap(document, ['bookFace']);
});