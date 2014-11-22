require.config({
    baseUrl: './',
    paths: {
        'angular': '../vendor/angularjs/angular',
        'angular-mocks': '../vendor/angular-mocks/angular-mocks'
    },
    shim: {
        'angular': {
            exports: 'angular'
        }
    }
});
require(['js/boot/app', 'angular'], function (app, angular) {
    angular.element(document).ready(function () {
        var application = new app.App();
        angular.bootstrap(document, [application.applicationName]);
        document.getElementsByTagName('html')[0].dataset.ngApp = application.applicationName;
    });
});
