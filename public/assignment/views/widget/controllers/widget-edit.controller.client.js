(function () {
    angular
        .module("WebAppMaker")
        .controller("EditWidgetController", EditWidgetController);

    function EditWidgetController($sce, $routeParams, WidgetService, $location) {
        var vm = this;
        vm.userId = $routeParams['uid'];
        vm.websiteId = $routeParams['wid'];
        vm.pageId = $routeParams['pid'];
        vm.widgetId = $routeParams['wgid'];


        vm.updateWidget = updateWidget;
        vm.deleteWidget = deleteWidget;
        vm.editTemplate = editTemplate;


        function init() {
            WidgetService
                .findWidgetById(vm.widgetId)
                .success(function (widget) {
                    vm.widget = widget;
                })

        }

        init();


        function updateWidget(widget) {
            WidgetService
                .updateWidget(widgetId, widget)
                .success(function (widgetId) {
                    if (widgetId == null) {
                        vm.error = "Unable to update widget"
                    } else {
                        vm.message = "Widget successfully updated!"; 
                        $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget");
                    }
                });
        }

        function deleteWidget(widgetId) {
            WidgetService
                .deleteWidget(widgetId)
                .success(function () {
                    $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget");
                });
        }

        function editTemplate(type) {
            return 'views/widget/templates/editors/widget-'+type.toLowerCase()+'-edit.view.client.html';
        }


    }
})();