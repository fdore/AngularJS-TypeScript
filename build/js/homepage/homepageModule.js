/// <reference path="../homepage/homepageController.ts" />
define(["require", "exports", 'homepage/homepageController'], function (require, exports, HomePageController) {
    var HomePageNgModule = (function () {
        function HomePageNgModule() {
            this.name = 'TodoApp.Homepage';
            angular.module(this.name, []).controller('HomePageController', HomePageController.HomePageController);
        }
        return HomePageNgModule;
    })();
    exports.HomePageNgModule = HomePageNgModule;
});
