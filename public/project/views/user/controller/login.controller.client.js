(function () {
    angular
        .module("BostonHealth")
        .controller("LoginController", LoginController);


    function LoginController($location, UserService) {

        var vm = this;
        vm.login = login;

        function init() {

        }

        init();


        function login(user) {

            var promise = UserService.findUserByCredentials(user.username, user.password);

            promise.success(function (user) {
                if (user) {

                    if (user.role === "doctor") {
                        console.log("Logging in doctor");
                        $location.url("/doctor/" + user._id);
                    } else {
                        console.log("Logging in patient");
                        $location.url("/patient/" + user._id);
                    }
                } else {
                    vm.error = "User not found";
                    console.log(vm.error);
                }
            });
        }

    }
})();