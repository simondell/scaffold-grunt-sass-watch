module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        sourceMap: true
      },
      site: {
        files: {'site/styles.css': 'site/styles.scss'}
      }
    },

    watch: {
      site: {
        files: '**/*.scss',
        tasks: 'sass',
        options: {
          livereload: true
        }
      }
    },

    connect: {
      server: {
        options: {
          base: 'site',
          livereload: true
        }
      }
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['connect', 'watch']);

};