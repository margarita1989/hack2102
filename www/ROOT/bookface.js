define([
    'angular',
    'angular-upload',
    'angular-pdfViewer',
    'angular-rating',

    'upload/upload-controller',
    'file-viewer/file-viewer-controller',
    'profile/profile-controller'
], function(
    angular,
    angularUpload,
    angularPdf,
    angularRating,

    uploadCtrl,
    fileViewerCtrl,
    profileCtrl
) {
    var bookFace;

    bookFace = angular.module('bookFace', [
        'lr.upload',
        'ngPDFViewer',
        'ratings'
    ]);

    PDFJS.workerSrc = '/lib/pdf.worker.js';

    bookFace
        .controller('UploadController', uploadCtrl)
        .controller('fileViewerController', fileViewerCtrl)
        .controller('profileController', profileCtrl)

        .config(['$interpolateProvider', function($interpolateProvider) {
            $interpolateProvider.startSymbol('${');
            $interpolateProvider.endSymbol('}');
        }]);

    angular.bootstrap(document, ['bookFace']);
});