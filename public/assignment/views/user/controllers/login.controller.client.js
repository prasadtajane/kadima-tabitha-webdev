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
            UserService
                .login(user)
                .then(function (response) {
                    var user = response.data;
                    $location .url("/user/" + user_id);
                });
        }
    }
})();