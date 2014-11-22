var file, requireModules;
requireModules = [];
for (file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (file.substring(file.length - 8, file.length) === '.spec.js') {
            requireModules.push(file);
        }
    }
}

require({
    // !! Karma serves files from '/base'
    baseUrl: '/base/js',
    paths: {
        'angular': '../vendor/angularjs/angular',
        'angular-mocks': '../vendor/angular-mocks/angular-mocks'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-mocks': {
            deps: ['angular']
        }
    },
    priority: ['angular']
}, requireModules, function () {
    window.__karma__.start();
}, function (err) {
});
