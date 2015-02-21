define([
    'angular',
    'angular-route',
    'angular-translate',
    'angular-upload',

    'upload/upload-controller'
], function(
    angular,
    angularRoute,
    angularTranslate,
    angularUpload,

    uploadCtrl
) {
    var bookFace;

    bookFace = angular.module('bookFace', [
        'ngRoute',
        'lr.upload',
        'pascalprecht.translate'
    ]);

    bookFace
        .controller('UploadController', uploadCtrl)

        .config(function($interpolateProvider) {
            $interpolateProvider.startSymbol('${');
            $interpolateProvider.endSymbol('}');
        });

    angular.bootstrap(document, ['bookFace']);
});