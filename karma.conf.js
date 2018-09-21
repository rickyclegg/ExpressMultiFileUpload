/* eslint-disable sort-keys,array-bracket-newline */
/*
 * Karma configuration
 * Generated on Wed Sep 19 2018 21:36:49 GMT+0100 (British Summer Time)
 */

module.exports = config => {
  config.set({

    // Base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    /*
     * Frameworks to use
     * available frameworks: https://npmjs.org/browse/keyword/karma-adapter
     */
    frameworks: ['jasmine-ajax', 'jasmine-jquery', 'jasmine'],


    // List of files / patterns to load in the browser
    files: [
      'https://code.jquery.com/jquery-3.3.1.min.js',
      'public/src/**/*.js'
    ],


    // List of files / patterns to exclude
    exclude: [],


    /*
     * Preprocess matching files before serving them to the browser
     * available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
     */
    preprocessors: {},


    /*
     * Test results reporter to use
     * possible values: 'dots', 'progress'
     * available reporters: https://npmjs.org/browse/keyword/karma-reporter
     */
    reporters: ['progress'],


    // Web server port
    port: 9876,


    // Enable / disable colors in the output (reporters and logs)
    colors: true,


    /*
     * Level of logging
     * possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
     */
    logLevel: config.LOG_INFO,


    // Enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    /*
     * Start these browsers
     * available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
     */
    browsers: ['Chrome'],


    /*
     * Continuous Integration mode
     * if true, Karma captures browsers, runs the tests and exits
     */
    singleRun: true,

    /*
     * Concurrency level
     * how many browser should be started simultaneous
     */
    concurrency: Infinity
  });
};
