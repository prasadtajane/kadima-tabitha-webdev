(function () {
    angular
        .module("BostonHealth")
        .controller("RegisterController", RegisterController);


    function RegisterController($location, UserService) {
        var vm = this;
        vm.register = register;
        vm.login = login;



        function init() {
            var promise = UserService.findUserById(vm.userId);
            promise.success(function (user) {
                vm.user = user;
            });
        }

        init();

        function login(username, password) {
            UserService
                .findUserByCredentials(username, password)
                .then(function (response) {
                    var user = response.data;
                    if (user === null) {
                        vm.error = "User not found";
                    }
                    else {
                        $location.url("/doctor/" + user._id);
                    }
                }, function (error) {
                    vm.error = "Error: " + error;
                })
        }


        function register(doctor) {
            DoctorService
                .findUserByUsername(user.username)
                .success(function (user) {
                    vm.error = "Username already taken";
                })
                .error(function () {
                    UserService
                        .createUser(user)
                        .success(function (newUser) {
                            $location.url("/user/" + newUser._id);
                        })
                        .error(function () {
                            vm.error = "User Registration Failed";
                        })
                })
        }

    }
})();