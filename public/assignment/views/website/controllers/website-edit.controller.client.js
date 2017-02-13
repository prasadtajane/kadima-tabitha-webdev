(function () {
    angular
        .module("WebAppMaker")
        .controller("EditWebsiteController", EditWebsiteController);
    
    function EditWebsiteController($routeParams, $location, WebsiteService) {
        var vm = this;
        
        var userId = $routeParams['uid'];
        var websiteId = $routeParams['wid'];
        
        //event handlers 
        vm.updateWebsite = updateWebsite;
        vm.deleteWebsite = deleteWebsite;

        function init() {
            var websites  = WebsiteService.findWebsitesByUser(userId);
            vm.websites = websites; 
            var website = WebsiteService.findWebsiteById(websiteId);
            vm.website = website; 
        }

        init();

        function updateWebsite(website) {
            var website = WebsiteService.updateWebsite(websiteId, website);
            if (website != null) {
                vm.message = "Website has been successfully updated!"; 
            } else {
                vm.error = "Unable to update website"
            }
            
        }

        function deleteWebsite() {
            WebsiteService.deleteWebsite(vm.websiteId);
            $location.url("/user/" + vm.userId + "/website");
        }
    }
}) ();