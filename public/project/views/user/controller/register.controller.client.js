(function () {
    angular
        .module("BostonHealth")
        .controller("RegisterController", RegisterController);


    function RegisterController($location, UserService) {
        var vm = this;
        vm.register = register;
        vm.login = login;
        vm.patient = true;


        function init() {
            // TODO move to profile pages
            // var promise = UserService.findUserById(vm.userId);
            // promise.success(function (user) {
            //     vm.user = user;
            // });
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


        function register(user) {
            UserService
                .findUserByUsername(user.username)
                .success(function (user) {
                    vm.error = "Username already taken";
                    console.log(vm.error);
                })
                .error(function () {
                    UserService
                        .createUser(user)
                        .success(function (newUser) {
                            if(vm.patient) {
                                newUser.role = "patient";
                                $location.url("/patient/" + newUser._id);

                            } else {
                                newUser.role = "doctor";
                                $location.url("/doctor/" + newUser._id);
                            }

                        })
                        .error(function () {
                            vm.error = "User Registration Failed";
                        })
                })
        }

    }
})();