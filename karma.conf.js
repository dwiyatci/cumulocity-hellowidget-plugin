const _ = require('lodash');
const glob = require('glob');
const { readJsonSync } = require('fs-extra');
const { resolve, dirname } = require('path');

// const APP_CONTEXT_PATH = process.argv[4] || 'helloapp';

const pluginJsFiles = _(glob.sync('plugins/*/cumulocity.json'))
  .flatMap(manifestFile =>
    _.map(readJsonSync(manifestFile).js, jsFile => {
      let baseDir = dirname(manifestFile);

      if (jsFile.match(/^(node_modules|bower_components)/i)) {
        baseDir = resolve(baseDir, '../..');
      }

      return resolve(baseDir, jsFile);
    })
  )
  .compact()
  .value();

module.exports = config => {
  config.set({
    singleRun: false,

    files: [
      'node_modules/cumulocity-ui-build/core{,_*}/main.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'test-helper.js',
      ...pluginJsFiles,
      'plugins/*/**/*.spec.js', // match plugins/p/x.spec.js but not plugins/x.spec.js,
      'plugins/*/**/*.html'
    ],

    frameworks: ['jasmine'],

    browsers: ['ChromeHeadless'],

    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-spec-reporter'),
      require('karma-ng-html2js-preprocessor'),
      require('karma-babel-preprocessor'),
      { 'preprocessor:c8y-pluginpath': ['factory', c8yPluginPathPreprocessor] }
    ],

    preprocessors: {
      // Match files in all plugins subfolders except vendor/ or lib/.
      'plugins/*/{*.js,!(vendor)/**/*.js,!(lib)/**/*.js}': ['c8y-pluginpath', 'babel'],
      'plugins/*/**/*.html': ['c8y-pluginpath', 'ng-html2js']
    },

    reporters: ['spec'],
    specReporter: {
      maxLogLines: 5, // limit number of lines logged per test
      suppressErrorSummary: true, // do not print error summary
      suppressFailed: false, // do not print information about failed tests
      suppressPassed: false, // do not print information about passed tests
      suppressSkipped: false, // do not print information about skipped tests
      showSpecTiming: false // print the time elapsed for each spec
    },

    ngHtml2JsPreprocessor: {
      cacheIdFromPath: filepath => filepath.replace(/^plugins\//, ''),
      moduleName: 'c8yHtml.test'
    },

    logLevel: config.LOG_ERROR
  });
};

function c8yPluginPathPreprocessor() {
  return (content, file, done) => {
    const [, pluginName] = file.originalPath.match(/plugins\/(.+?)\//);

    done(content.replace(/:::PLUGIN_PATH:::/g, pluginName));
  };
}
