module.exports = function (grunt) {
  'use strict';

  var DEFAULT_HOST = 'developer.cumulocity.com',
    DEFAULT_PROTOCOL = 'https',
    host = DEFAULT_HOST,
    protocol = DEFAULT_PROTOCOL;

  if (grunt.option('host')) {
    host = grunt.option('host');
  }

  if (grunt.option('protocol')) {
    protocol = grunt.option('protocol');
  }
  
  // Configure local proxy
  // grunt.config('cumulocity.localproxy’, ‘https://user:pass@local.proxy:8080')

  grunt.config('cumulocity.host', host);
  grunt.config('cumulocity.protocol', protocol);

  grunt.config('paths.root', './');
  grunt.config('paths.temp', '.tmp');
  grunt.config('paths.build', 'build');
  grunt.config('paths.plugins', 'plugins');
  grunt.config('paths.bower', 'bower_components');

  //Load cumulocity grunt tasks
  grunt.loadNpmTasks('grunt-cumulocity-ui-tasks');

  grunt.registerTask('server', [
    'pluginPreAll',
    'connect',
    'watch'
  ]);

  grunt.registerTask('build', [
    'pluginBuildAll'
  ]);

};