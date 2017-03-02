(function () {
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);

    function RegisterController($location, UserService) {
        var vm = this;

        vm.register = register;


        function register(user) {
            UserService
                .findUserByUsername(user.username)
                .success(function (user) {
                    vm.message = "Sorry: That username is already taken";
                })
                .error(function () {
                    UserService
                        .createUser(user)
                        .success(function (user) {
                            $location.url('/user/' + user._id);
                        })
                        .error(function () {
                            vm.error = 'sorry could not register';
                        });
                });
        }

    }
})();