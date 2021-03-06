require.config({
    baseUrl: '/components',
    paths: {
        'angular': '../lib/angular',
        'angular-upload': '../lib/angular-upload',
        'angular-pdfViewer': '../lib/ng-pdfviewer',
        'angular-rating': '../lib/angular-rating',
        'pdf': '../lib/pdf',
        'pdf.worker': '../lib/pdf.worker',
        'pdf.compat': '../lib/pdf.compat',

        'bookface': '../bookface'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'pdf': ['pdf.compat'],
        'angular-route': ['angular'],
        'angular-translate': ['angular'],
        'angular-upload': ['angular'],
        'angular-rating': ['angular'],
        'angular-pdfViewer': ['angular', 'pdf']
    },
    deps: ['bookface']
});