define([
    'angular',
    'angular-route',
    'angular-translate',
    'angular-upload',
    'angular-pdf',

    'upload/upload-controller',
    'file-viewer/file-viewer-controller',

    'pdf',
    'pdf.worker'
], function(
    angular,
    angularRoute,
    angularTranslate,
    angularUpload,
    angularPdf,

    uploadCtrl,
    fileViewerCtrl
) {
    var bookFace;

    bookFace = angular.module('bookFace', [
        'ngRoute',
        'lr.upload',
        'pascalprecht.translate',
        'pdf'
    ]);

    bookFace
        .controller('UploadController', uploadCtrl)
        .controller('fileViewerController', fileViewerCtrl)

        .config(function($interpolateProvider) {
            $interpolateProvider.startSymbol('${');
            $interpolateProvider.endSymbol('}');
        });

    angular.bootstrap(document, ['bookFace']);
});