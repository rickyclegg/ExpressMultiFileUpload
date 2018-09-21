/* eslint-disable global-require,sort-keys */
'use strict';

module.exports = grunt => {
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify-es');

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
    },

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: [
          'public/src/FileHtml.js',
          'public/src/Form.js',
          'public/src/index.js'
        ],
        dest: 'public/scripts/index.js'
      }
    },

    uglify: {
      dist: {
        options: {
          sourceMap: true
        },
        files: {
          'public/scripts/index.min.js': ['public/scripts/index.js']
        }
      }
    }
  });

  grunt.registerTask('default', ['sass', 'concat', 'uglify']);
};
