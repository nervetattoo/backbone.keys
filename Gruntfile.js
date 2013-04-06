module.exports = function(grunt) {

    "use strict";

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        meta: {
            banner: "/*!\n" + " * <%= pkg.name %> v<%= pkg.version %>\n" +
            " * Copyright 2012, Raymond Julin (@nervetattoo)\n" +
            " * backbone.keys.js may be freely distributed under" +
            " the MIT license.\n */"
        },

        uglify: {
            lib: {
                "dist/backbone.keys.min.js": "backbone.keys.js"
            }
        },

        jshint: {
            files: ["grunt.js", "backbone.keys.js"],
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
                    define:true,
                    _:true,
                    Backbone:true,
                    $:true,
                    document:true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['jshint', 'uglify']);
};
