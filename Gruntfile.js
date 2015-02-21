'use strict';

(function () {
    var config;

    config = {
        'basePublicDir': 'www/ROOT',
        'less': {
            dist: {
                files: {
                    '<%= basePublicDir %>/css/main.css': '<%= basePublicDir %>/less/index.less'
                }
            }
        }
    };

    function builder(grunt) {
        grunt.initConfig(config);

        grunt.loadNpmTasks('grunt-contrib-less');

        grunt.registerTask('build-less', ['less']);
        grunt.registerTask('default', ['build-less']);
    }

    module.exports = builder;
})();