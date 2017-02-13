(function () {
    angular
        .module("WebAppMaker")
        .controller("NewWidgetController", NewWidgetController)
        .controller("EditWidgetController", EditWidgetController)
        .controller("WidgetListController", WidgetListController); 

    function NewWidgetController($routeParams, $location, WidgetService) {
        var vm = this;
    }

    function EditWidgetController($routeParams, $location, WidgetService) {
        var vm = this;

    }

    function WidgetListController($routeParams, WidgetService) {
        var vm = this;
    }

});