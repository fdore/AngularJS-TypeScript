/// <amd-dependency path="angular-mocks"/>
define(["require", "exports", 'homepage/homepageModule', 'angular', "angular-mocks"], function (require, exports, homepage, angular) {
    describe('HomePageController', function () {
        var controller, scope;
        beforeEach(angular.mock.module(new homepage.HomePageNgModule().name));
        describe('Given we have a controller', function () {
            beforeEach(angular.mock.inject(function ($rootScope, $controller) {
                scope = $rootScope.$new();
                controller = $controller('HomePageController', {
                    $scope: scope
                });
            }));
            it('should be defined', function () {
                expect(controller).toBeDefined();
            });
            it('message should be Welcome', function () {
                expect(scope.message).toBe('Welcome');
            });
        });
    });
});
