/* eslint-disable global-require,sort-keys */
'use strict';

module.exports = grunt => {
  grunt.loadNpmTasks('grunt-contrib-sass');

  const config = {};

  grunt.initConfig({
    config,

    sass: {
      options: {
        style: 'expanded'
      },
      dist: {
        files: {
          'public/styles/main.css': 'public/scss/main.scss'
        }
      }
    }
  });

  grunt.registerTask('default', ['sass']);
};
