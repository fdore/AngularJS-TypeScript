define(["require", "exports"], function (require, exports) {
    var HomePageController = (function () {
        function HomePageController($scope) {
            $scope.message = 'Welcome';
        }
        return HomePageController;
    })();
    exports.HomePageController = HomePageController;
});
