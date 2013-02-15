/*
 * grunt-preloader-manifest-generator
 * https://github.com/shadowford/grunt-preloader-manifest-generator
 *
 * Copyright (c) 2013 Lachlan Ford
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Configuration to be run (and then tested).
    preloadManifest: {
      data: {
        srcDir   : 'app/',
        assetsDir: 'app/assets/',
        overwriteManifest: true
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['preloadManifest']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'preloadManifest']);

};
