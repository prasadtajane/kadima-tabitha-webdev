(function () {
    angular
        .module("BostonHealth")
        .controller("RegisterController", RegisterController);


    function RegisterController($location, UserService) {
        var vm = this;
        vm.register = register;
        vm.patient = true;


        function init() {
            // TODO move to profile pages
            // var promise = UserService.findUserById(vm.userId);
            // promise.success(function (user) {
            //     vm.user = user;
            // });
        }

        init();


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