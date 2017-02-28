(function () {
    angular
        .module("WebAppMaker")
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
                    $location.url("/user/" + user._id);
                } else {
                    vm.alert = "Incorrect credentials";
                }
            });

        }
    }
})();