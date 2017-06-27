(function () {
    angular
        .module("BostonHealth")
        .controller("RegisterController", RegisterController);


    function RegisterController($location, UserService) {
        var vm = this;
        vm.register = register;
        vm.submitForm = submitForm;

        function init() {
            vm.type= "patient";
        }

        init();

        function submitForm(isValid) {
            if (isValid) {
                alert('our form is amazing');
            }
        }


        function register(user) {
            UserService
                .findUserByUsername(user.username)
                .success(function (user) {
                    vm.error = "Username already taken";
                    console.log(vm.error);
                })
                .error(function () {
                    user.role = vm.type;
                    UserService
                        .createUser(user)
                        .success(function (newUser) {
                            $location.url("/" + newUser.role + "/" + newUser._id);
                        })
                        .error(function () {
                            vm.error = "User Registration Failed";
                        })
                })
        }

    }
})();