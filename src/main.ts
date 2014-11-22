require.config({
    baseUrl: './',

    paths: {
        'angular': '../vendor/angular/angular'
    },

    shim: {
        'angular': {
            exports: 'angular'
        }
    }
});

    require(['js/boot/app', 'angular'], (app, angular) => {
    angular.element(document).ready(function () {
        var application = new app.App();
        angular.bootstrap(document, [application.applicationName]);
        document.getElementsByTagName('html')[0].dataset.ngApp = application.applicationName;
    });

});