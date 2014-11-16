export interface IHomePageScope extends ng.IScope {
    message: string;
}


export class HomePageController {

    constructor ($scope: IHomePageScope) {
        $scope.message = 'Welcome';
    }
}