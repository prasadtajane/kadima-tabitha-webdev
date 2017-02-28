(function () {
    angular
        .module("WebAppMaker")
        .controller("NewWebsiteController", NewWebsiteController);

        function NewWebsiteController($routeParams, WebsiteService) {
            var vm = this;

            vm.userId = $routeParams['uid'];
            vm.createWebsite = createWebsite;

            function init() {

            }

            init();
            

            function createWebsite (website) {
                WebsiteService
                    .createWebsite(website.developerId, website)
                    .success(function (website) {
                        vm.message = "Website created!";
                       // $location.url("/user/" + vm.userId + "/website/")
                    })
                    .error(function (err) {
                        vm.message = "Unable to create website"
                    })
            }
        }
    
})();