(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController);
    
    function WebsiteListController($routeParams, WebsiteService) {
        var vm = this;
        var userId = $routeParams['uid'];

        vm.userId = userId;


        function init() {
            WebsiteService
                .findAllWebsitesForUser(userId)
                .success(function () {
                    vm.message = "Here's the list of websites"; 
                })
                .error(function (err) {
                    vm.message = "Unable to load websites"; 
                })
        }

        init();
    }
})();