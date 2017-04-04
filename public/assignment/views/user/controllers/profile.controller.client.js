(function () {
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);

    function ProfileController(UserService, $routeParams, $rootScope, $location) {

        var vm = this;
        vm.userId = $routeParams['uid'];
        vm.logout = logout;

        // event handlers
        vm.updateUser = updateUser;
        vm.deleteUser = deleteUser;

        function logout() {
            UserService
                .logout()
                .then(function (response) {
                    $rootScope.currentUser = null;
                    $location.url("/");
                })
        }
        

        function init() {
            UserService
                .findUserById(vm.userId)
                .success(function (user) {
                    vm.user = user;
                });
        }

        init();

        function updateUser(newUser) {
            UserService
                .updateUser(vm.userId, newUser)
                .success(function (user) {
                    if (user != null) {
                        vm.message = "User has been successfully updated!";

                    } else {
                        vm.error = "Unable to update user";
                    }
                });
        }

    
        function deleteUser() {
            UserService
                .deleteUser(vm.userId);
        }

    }


})();