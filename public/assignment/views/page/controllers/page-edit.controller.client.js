(function () {
    angular
        .module("WebAppMaker")
        .controller("EditPageController", EditPageController);

    function EditPageController($routeParams, PageService) {
        var vm = this;
        var userId = $routeParams['uid'];
        var websiteId = $routeParams['wid'];
        var pageId = $routeParams['pid'];

        vm.websiteId = websiteId;
        vm.userId = userId;
        vm.pageId = pageId;

        vm.updatePage = updatePage;
        vm.deletePage = deletePage;

        function init() {
            vm.page = PageService.findPageById(pageId);
            vm.name = vm.page.name;
            vm.title = vm.page.title;
            vm.description = vm.page.description;
        }

        init();

        function updatePage(newPage) {
            PageService
                .updateWebsite(vm.websiteId, newPage)
                .success(function (user) {
                    if (user != null) {
                        vm.message = "Page updated!"
                    } else {
                        vm.error = "Page couldn't be updated."
                    }

                });
        }

        function deletePage() {
            WebsiteService.deleteWebsite(vm.pageId);
        }
    }
})();