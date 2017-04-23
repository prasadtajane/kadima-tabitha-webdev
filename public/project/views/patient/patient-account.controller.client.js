(function () {
    angular
        .module("BostonHealth")
        .controller("PatientAccountController", PatientAccountController);


    function PatientAccountController($routeParams, UserService, $location) {

        var vm = this;
        vm.userId = $routeParams["uid"];
        vm.editProfile = editProfile;
        vm.deleteUser = deleteUser;

        function init() {
            var promise = UserService.findUserById(vm.userId);
            promise.success(function (user) {
                vm.user = user;
            });
        }

        init();

        function editProfile(user) {
            UserService
                .updateUser(vm.userId, user)
                .success(function (updateUser) {
                    if(updateUser === null) {
                        vm.error = "Error: unable to update user";
                    } else {
                        vm.message = "User successfully updated";
                    }
                });

        }

        function deleteUser(user) {
            UserService
                .deleteUser(user._id)
                .success(function () {
                    $location.url("/home");
                })
                .error (function () {
                    vm.error = "Unable to remover user."
                })
        }

    }
})();