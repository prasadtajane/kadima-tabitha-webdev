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
            UserService
                .findUserByCredentials(user.username, user.password)
                .success(function (user) {
                    $location.url("/" + user[0].role + "/" + user[0]._id);
                })
                .error(function () {
                    vm.error = "Could not find user with those credentials"
                })
        }

    }
})();