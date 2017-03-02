(function () {
    angular
        .module("WebAppMaker")
        .controller("EditWebsiteController", EditWebsiteController);

    function EditWebsiteController($routeParams, WebsiteService, $location) {
        var vm = this;

        vm.userId = $routeParams['uid'];
        vm.websiteId = $routeParams['wid'];

        //event handlers 
        vm.updateWebsite = updateWebsite;
        vm.deleteWebsite = deleteWebsite;


        function init() {
            WebsiteService
                .findAllWebsitesForUser(vm.userId)
                .success(function (websites) {
                    vm.message = "Here's the list of websites";
                    vm.websites = websites;
                });

            WebsiteService
                .findWebsiteById(vm.websiteId)
                .success(function (website) {
                    vm.website = website;
                })
        }

        init();


        function updateWebsite(website) {
            WebsiteService
                .updateWebsite(vm.websiteId, website)
                .success(function (website) {
                    if (website) {
                        vm.message = "Website successfully updated!";
                        $location.url("/user/" + vm.userId + "/website");

                    } else {
                        vm.error = "Unable to update website";
                    }
                })

        }

        function deleteWebsite() {
            WebsiteService
                .deleteWebsite(vm.websiteId)
                .success(function () {
                    $location.url("/user/" + vm.userId + "/website");
                })
                .error(function () {
                    vm.error = "Unable to remove website";
                });
        }
    }
})();