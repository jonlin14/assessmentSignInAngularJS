module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  watch: {
    options: {
      livereload: true,
    },
    html: {
      files: ['index.html']
    },
    css: {
      files: ['css/styles.css']
    },
    scripts: {
        files: ['js/scripts.js']
    },
  },
});
grunt.loadNpmTasks('grunt-contrib-watch');

};
