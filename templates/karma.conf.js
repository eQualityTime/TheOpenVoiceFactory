module.exports = function (config) {
    'use strict';
    config.set({
    basePath: './', //set this if you want to run tests from a specific directory
        frameworks: ['jasmine'],

        files: [
            //'src/*.js',
            'spec/*_test.js',
            'javascript/read_json.js',
            {pattern: 'testdata/*.obf', watched: true, served: true, included: true},
            'https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min.js'
        ],
        exclude: [
        ],
        proxies: {
            '/testdata/': '/base/testdata/'
        },
            
        preprocessors: {
            // '../src/*.js': ['coverage']
        },
        reporters: ['dots'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        //singleRun: true,

        plugins: [
			'karma-jquery',
            'karma-jasmine',
            'karma-chrome-launcher'
        ]
    });
};
