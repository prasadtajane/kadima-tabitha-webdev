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
            var updateWidget = WidgetService.updateWidget(widgetId, widget);
            if (updateWidget == null) {
                vm.error("Error: Widget could not be updated.");
                $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget");
            }
        }

        function deleteWidget(widgetId) {
            WidgetService.deleteWidget(widgetId);
            $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget");
        }


    }
})();