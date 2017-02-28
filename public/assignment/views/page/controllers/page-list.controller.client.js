(function () {
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController); 
    
    function PageListController($routeParams, PageService) {
        var vm = this;
        var userId = $routeParams['uid'];
        var websiteId = $routeParams['wid']; 

        vm.websiteId = websiteId;
        vm.userId = userId;
        
        function init() {
            PageService
                .findPagesByWebsite(websiteId)
                .success(function (page) {
                    vm.message = "Here's the list of pages"; 
                })
                .error(function (err) {
                    vm.error = "Unable to load pages"
                }); 
            vm.pages = pages;
        }
        
        init(); 
    }
})();