(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetListController", WidgetListController);

    function WidgetListController($sce, $routeParams, WidgetService) {
        var vm = this;
        var userId = $routeParams['uid'];
        var websiteId = $routeParams['wid'];
        var pageId = $routeParams['pid'];

        vm.websiteId = websiteId;
        vm.userId = userId;
        vm.pageId = pageId;

        vm.doYouTrust = doYouTrust;

        function init() {
            var widgets = WidgetService.findWidgetsByPageId(pageId);
            vm.widgets = widgets;
        }

        init();

        function doYouTrust(url) {
            var baseUrl = "https://www.youtube.com/embed/";
            var urlParts = url.split('/');
            var id = urlParts[urlParts.length-1];
            baseUrl += id;
            return $sce.trustAsResourceUrl(baseUrl);
        }
    }
   
})();