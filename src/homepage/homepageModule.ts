/// <reference path="../homepage/homepageController.ts" />
/// <amd-dependency path="homepage/homepageController"/>

import HomePageController = require('homepage/homepageController');

export class HomePageNgModule {
    name :string;

    constructor() {
        this.name = 'TodoApp.Homepage';
        angular.module(this.name, [])
                .controller('HomePageController', HomePageController.HomePageController);
    }

}