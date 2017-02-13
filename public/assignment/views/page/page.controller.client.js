(function () {
    angular
        .module("WebAppMaker")
        .controller("NewPageController", NewPageController)
        .controller("EditPageController", EditPageController)
        .controller("PageListController", PageListController);

    function NewPageController($routeParams, $location, PageService) {
        var vm = this;
    }

    function EditPageController($routeParams, $location, PageService) {
        var vm = this;

    }

    function PageListController($routeParams, PageService) {
        var vm = this;
    }
});
