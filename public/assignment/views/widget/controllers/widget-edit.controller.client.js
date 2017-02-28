(function () {
    angular
        .module("WebAppMaker")
        .controller("EditWidgetController", EditWidgetController);

    function EditWidgetController($sce, $routeParams, WidgetService) {
        var vm = this;
        var userId = $routeParams['uid'];
        var websiteId = $routeParams['wid'];
        var pageId = $routeParams['pid'];
        var widgetId = $routeParams['wgid'];

        vm.websiteId = websiteId;
        vm.userId = userId;
        vm.pageId = pageId;
        vm.widgetId = widgetId;

        vm.updateWidget = updateWidget;
        vm.deleteWidget = deleteWidget;


        function init() {
            var widget = WidgetService.findWidgetById(widgetId);
            vm.widget = widget;
        }

        init();


        function updateWidget(widget) {
            WidgetService
                .updateWidget(widgetId, widget)
                .success(function (widget) {
                    vm.message = "Widget updated"
                })
                .error(function (error) {
                    vm.error = "Could not update widget"
                })

        }

        function deleteWidget(widgetId) {
            WidgetService.deleteWidget(widgetId);
            $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget");
        }


    }
})();