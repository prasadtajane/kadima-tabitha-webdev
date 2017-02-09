(function () {
    angular
        .module("WebAppMaker")
        .controller("LoginController", LoginController);

    function LoginController($routeParams, $location, UserService) {

        var vm = this;
        var userId = $routeParams["userId"];
        function init() {
          vm.user = UserService.findUserById(userId);
        }
        init();

        function login(user) {
            var user = UserService.findUserByCredentials(user.username, user.password);
            if(user) {
                $location.url("/user/"+user._id);
            } else {
                vm.error = "User not found";
            }
        }
    }
})();