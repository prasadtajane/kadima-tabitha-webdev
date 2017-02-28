(function () {
        angular
            .module("WebAppMaker")
            .controller("RegisterController", RegisterController);

        function RegisterController($location, UserService) {
            var vm = this;

            vm.register = register;

            function init() {

            }

            init();

            function register(user) {
                UserService
                    .createUser(user.username)
                    .success(function (user) {
                        vm.message = "Avaliable";
                        $location.url("/user/" + vm.user._id);
                    })
                    .error(function (err) {
                        vm.message = "That username is already taken"
                    });

            }

        }
    })();