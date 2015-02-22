define([
    'angular',
    'angular-upload',
    'angular-pdfViewer',

    'upload/upload-controller',
    'file-viewer/file-viewer-controller'
], function(
    angular,
    angularUpload,
    angularPdf,

    uploadCtrl,
    fileViewerCtrl
) {
    var bookFace;

    bookFace = angular.module('bookFace', [
        'lr.upload',
        'ngPDFViewer'
    ]);

    PDFJS.workerSrc = 'lib/pdf.worker.js';

    bookFace
        .controller('UploadController', uploadCtrl)
        .controller('fileViewerController', fileViewerCtrl)

        .config(function($interpolateProvider) {
            $interpolateProvider.startSymbol('${');
            $interpolateProvider.endSymbol('}');
        });

    angular.bootstrap(document, ['bookFace']);
});