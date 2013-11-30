/*jslint node: true*/
module.exports = function (config) {
    config.set({
        basePath: '../',
        files: [
            'js/angular.min.js',
            'js/app.js',
            'test/mainControllerTest.js'
        ],
        autoWatch: true,
        frameworks: ['jasmine'],
        browsers: [
            'Chrome'
        ]
    });
};