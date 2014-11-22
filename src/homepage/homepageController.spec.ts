/// <amd-dependency path="angular-mocks"/>

import homepage = require('homepage/homepageModule');
import angular = require('angular');

describe('HomePageController', function () {
   var controller,
       scope;

    beforeEach(angular.mock.module(new homepage.HomePageNgModule().name));

    describe('Given we have a controller', function () {
        beforeEach(angular.mock.inject(($rootScope, $controller) => {
            scope = $rootScope.$new();
            controller = $controller('HomePageController', {
                $scope: scope
            });
        }));

        it('should be defined', () => {
            expect(controller).toBeDefined();
        });

        it('message should be Welcome', () => {
           expect(scope.message).toBe('Welcome');
        });
    });
});