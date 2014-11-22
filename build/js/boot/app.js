/// <reference path="../homepage/homepageModule.ts" />
define(["require", "exports", 'homepage/homepageModule'], function (require, exports, homepage) {
    var App = (function () {
        function App() {
            var homepageModule = new homepage.HomePageNgModule(), depends = [homepageModule.name];
            this.applicationName = 'TodoApp';
            this.app = angular.module(this.applicationName, depends);
        }
        return App;
    })();
    exports.App = App;
});
