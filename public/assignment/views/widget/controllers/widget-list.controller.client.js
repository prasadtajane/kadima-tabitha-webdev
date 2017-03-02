(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetListController", WidgetListController);

    function WidgetListController($sce, $routeParams, WidgetService) {
        var vm = this;
        vm.userId = $routeParams['uid'];
        vm.websiteId = $routeParams['wid'];
        vm.pageId = $routeParams['pid'];

        vm.trustYoutubeUrl = trustYoutubeUrl;
        vm.trustHtml = trustHtml; 

        function init() {
            WidgetService
                .findAllWidgetsForPage(vm.pageId)
                .success(function (widgets) {
                    vm.message = "Here's a list of widgets";
                    vm.widgets = widgets;
                });
        }

        init();

        function trustYoutubeUrl(url) {
            var urlParts = url.split('/');
            var id = urlParts[urlParts.length-1];
            var baseUrl = "https://www.youtube.com/embed/" +id;
            return $sce.trustAsResourceUrl(baseUrl);
        }

        function trustHtml(html) {
            return $sce.trustAsHtml(html);
        }
    }
   
})();