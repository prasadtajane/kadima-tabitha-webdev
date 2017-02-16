(function () {
    angular
        .module("WebAppMaker")
        .controller("NewPageController", NewPageController);

    function NewPageController($routeParams, $location, PageService) {
        var vm = this;

        vm.userId = $routeParams['uid'];
        vm.websiteId = $routeParams['wid'];
        vm.createPage = createPage;


        function init() {
            vm.pages = PageService.findPagesByWebsiteId(vm.wid);
        }

        init(); 
        function createPage (page) {
            PageService.createPage(vm.websiteId, page);
        }
    }

})();