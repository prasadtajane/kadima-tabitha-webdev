(function () {
    angular
        .module("WebAppMaker")
        .controller("EditWebsiteController", EditWebsiteController);
    
    function EditWebsiteController($routeParams, $location, WebsiteService) {
        var vm = this;
        
        var userId = $routeParams['uid'];
        var websiteId = $routeParams['wid'];

        vm.userId = userId;
        vm.websiteId = websiteId;

        //event handlers 
        vm.updateWebsite = updateWebsite;
        vm.deleteWebsite = deleteWebsite;
        
        
        function init() {
            vm.websites = WebsiteService.findWebsitesByUser(userId);
            vm.website = WebsiteService.findWebsiteById(websiteId);
            vm.name = vm.website.name;
            vm.description = vm.website.description;
        }

        init();


        function updateWebsite(website) {
            var updateWebsite = WebsiteService.updateWebsite(vm.websiteId, website);
            if (updateWebsite != null) {
            }
            else {
                vm.error = "Website couldn't be Updated."
            }
        }

        function deleteWebsite() {
            WebsiteService.deleteWebsite(vm.websiteId);
        }
    }
}) ();