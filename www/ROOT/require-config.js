require.config({
    baseUrl: 'components',
    paths: {
        'angular': '../lib/angular',
        'angular-route': '../lib/angular-route',
        'angular-translate': '../lib/angular-translate',
        'angular-upload': '../lib/angular-upload',
        'angular-pdf': '../lib/angular-pdf',
        'pdf': '../lib/pdf',
        'pdf.worker': '../lib/pdf.worker',

        'bookface': '../bookface'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': ['angular'],
        'angular-translate': ['angular'],
        'angular-upload': ['angular'],
        'angular-pdf': ['angular']
    },
    deps: ['bookface']
});