(function () {
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);

    function RegisterController($routeParams, $location, UserService) {
        var vm = this;
      //  vm.userId = $routeParams["uid"];
        vm.register = register;


        function register() {
            var verify = document.getElementById('verify').value;
            if (vm.user.password == verify) {
                UserService.createUser(vm.user);
                if(vm.user != null) {
                    $location.url("/user/" + vm.user._id);
                }
                else {
                    $location.url("/register");
                }
            }
            else {
                $location.url("/register");
            }
        }
    }


})();