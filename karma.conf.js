module.exports = function ( config ) {
    config.set( {
        basePath: './build',

        files: [
            { pattern: 'js/main-test.js', included: true },
            { pattern: 'js/**/*.js', included: false },
            { pattern: 'vendor/**/*.js', included: false }
        ],
        autoWatch: true,
        browsers: ['Chrome'],
        // web server port
        port: 9876,
        // cli runner port
        runnerPort: 9100,
        frameworks: ['jasmine', 'requirejs'],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }
    });
};