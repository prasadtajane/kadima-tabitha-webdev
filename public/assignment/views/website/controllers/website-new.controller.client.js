(function () {
    angular
        .module("WebAppMaker")
        .controller("NewWebsiteController", NewWebsiteController);

        function NewWebsiteController($routeParams, WebsiteService, $location) {
            var vm = this;

            vm.userId = $routeParams['uid'];
            vm.createWebsite = createWebsite;

            function init() {
                WebsiteService
                    .findAllWebsitesForUser(vm.userId)
                    .success(function (websites) {
                        vm.message = "Here's the list of websites";
                        vm.websites = websites;
                    });
            }

            init();
            

            function createWebsite (website) {
                WebsiteService
                    .createWebsite(vm.userId, website)
                    .success(function (website) {
                        vm.message = "Website created!";
                        $location.url("/user/"+vm.userId+"/website");
                    })
                    .error(function () {
                        vm.error = "Unable to create website"
                    })
            }
        }
    
})();