module.exports = function(grunt) {

    "use strict";

    grunt.initConfig({
        meta: {
            banner: "/*!\n" + " * backbone.keys.js v0.1\n" +
            " * Copyright 2012, Raymond Julin (@nervetattoo)\n" +
            " * backbone.keys.js may be freely distributed under" +
            " the MIT license.\n */"
        },

        lint: {
            files: ["grunt.js", "backbone.keys.js"]
        },

        min: {
            "dist/backbone.keys.min.js": ["<banner>",
            "backbone.keys.js"]
        },

        watch: {
            files: "<config:lint.files>",
            tasks: "lint"
        },

        jshint: {
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
                node: true
            },
            globals: {define:true,_:true,Backbone:true,$:true,document:true}
        }
    });

    // Default task.
    grunt.registerTask("default", "lint min");

};
