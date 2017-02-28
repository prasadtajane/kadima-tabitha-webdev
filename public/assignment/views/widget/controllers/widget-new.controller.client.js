(function () {
    angular
        .module("WebAppMaker")
        .controller("NewWidgetController", NewWidgetController);


    function NewWidgetController($routeParams, WidgetService, $location) {
        var vm = this;


        vm.userId = $routeParams['uid'];
        vm.websiteId = $routeParams['wid'];
        vm.pageId = $routeParams['wgid'];
        vm.createWidget = createWidget;


        function init() {
            vm.pages = PageService.findPagesByWebsiteId(vm.wid);
        }

        init();
        function createWidget(widget) {
            WidgetService
                .createWidget(vm.pageId, widget)
                .success(function () {
                    vm.message = "Here's the list of widgets. "
                    $location.url("user/" + vm.userId + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget/" + widget._id)

                })
                .error(function (err) {
                    vm.message = "Unable to load widgets";
                })

        }
    }
})();