module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'app/js/**/*.js']
    },
    uglify: {
      build: {
        files: {
          'dist/app.min.js': ['app/js/**/*.js']
        }
      }
    },
    // If you are using a
    cssmin: {
      combine: {
        files: {
          'dist/css/app.min.css': ['app/css/bootstrap-theme.css', 'app/css/style.css']
        }
      }
    },
    copy: {
      // Copy required non-built assets to the dist directory
      dist: {
        files: [
          {src: 'app/index.html', dest: 'dist/index.html'},
          {src: 'app/favicon.png', dest: 'dist/favicon.png'},
          {expand: true, cwd: 'app', src: ['img/**'], dest: 'dist/'}
        ]
      }
    }
  });

  grunt.registerTask('build', ['jshint', 'uglify', 'cssmin', 'copy:dist']);
  
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
};
