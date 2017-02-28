(function () {
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);

    function ProfileController(UserService, $routeParams) {

        var vm = this;

        // event handlers
        vm.updateUser = updateUser;


        var userId = $routeParams['uid'];

        function init() {
            var user = UserService.findUserById(userId);
            vm.user = user;
        }

        init();

        function updateUser(newUser) {
            UserService
                .updateUser(userId, newUser)
                .success(function (user) {
                    if (user != null) {
                        vm.message = "User has been successfully updated!";

                    } else {
                        vm.error = "Unable to update user";
                    }
                });
        }
    }


})();