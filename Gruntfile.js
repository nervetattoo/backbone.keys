module.exports = function(grunt) {

    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            lib: {
                files: {
                    'dist/backbone.keys.min.js': ['backbone.keys.js']
                },
                options: {
                    banner: '/*!\n' + ' * <%= pkg.name %>.js v<%= pkg.version %>\n' +
                    ' * Copyright 2012, Raymond Julin (@nervetattoo)\n' +
                    ' * backbone.keys.js may be freely distributed under' +
                    ' the MIT license.\n */'
                }
            }
        },

        connect: {
            server: {
                options: {
                    port: 9090
                }
            }
        },

        jasmine: {
            lib: {
                src: 'backbone.keys.js',
                options: {
                    host: 'http://localhost:9090/',
                    vendor: [
                        'test/vendor/underscore.js',
                        'test/vendor/jquery.js',
                        'test/vendor/backbone.js'
                    ],
                    specs: 'spec/*spec.js'
                }
            }
        },

        jshint: {
            files: ['grunt.js', 'backbone.keys.js', 'spec/*.js'],
            options: {
                boss: true,
                curly: false,
                eqeqeq: true,
                immed: false,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                eqnull: true,
                node: true,
                globals: {
                    _:true, $:true,
                    it:true, spyOn:true, describe:true,
                    expect: true, beforeEach: true,
                    define:true, Backbone:true, document:true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.registerTask('test', ['connect', 'jasmine']);
    grunt.registerTask('default', ['jshint', 'test', 'uglify']);
};
