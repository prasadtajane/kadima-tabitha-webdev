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
            var pages = PageService.findPagesByWebsiteId(websiteId); 
            vm.pages = pages;
        }
        
        init(); 
    }
})();