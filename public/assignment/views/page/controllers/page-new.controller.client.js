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

        }

        init();

        function createPage(page) {
            PageService
                .createPage(vm.websiteId, page)
                .success(function (page) {
                    vm.message = "Created page!";
                })
                .error(function (err) {
                    vm.message = "Unable to create page"; 
                })

        }
    }

})();