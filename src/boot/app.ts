/// <reference path="../homepage/homepageModule.ts" />

import homepage = require('homepage/homepageModule');

export class App {
    applicationName :string;
    app: ng.IModule;

    constructor() {
        var homepageModule = new homepage.HomePageNgModule(),
            depends = [homepageModule.name];

        this.applicationName = 'TodoApp';

        this.app = angular.module(this.applicationName, depends);
    }

}