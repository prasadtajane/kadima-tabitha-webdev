(function () {
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);

    function RegisterController($location, UserService) {

        function register(username, password) {
         /* TODO: create new user   */
        }

        function cancel() {
            $location.url("/default");
        }
    }

})();