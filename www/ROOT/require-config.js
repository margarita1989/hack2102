require.config({
    baseUrl: 'components',
    paths: {
        'angular': '../lib/angular',
        'angular-route': '../lib/angular-route',
        'angular-translate': '../lib/angular-translate',

        'bookface': '../bookface'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': ['angular'],
        'angular-translate': ['angular']
    },
    deps: ['bookface']
});