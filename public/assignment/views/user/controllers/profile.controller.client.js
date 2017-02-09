(function(){
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);

    function ProfileController($routeParams, UserService) {
        var vm = this;
        var userId = $routeParams["userId"];
        function init() {
            vm.user = UserService.findUserById(vm.userId); 
        }
        
        init(); 
    }
})();