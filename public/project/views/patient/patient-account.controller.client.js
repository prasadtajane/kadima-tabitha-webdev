(function () {
    angular
        .module("BostonHealth")
        .controller("PatientAccountController", PatientAccountController);


    function PatientAccountController($routeParams, UserService) {

        var vm = this;
        vm.userId = $routeParams["uid"];
        vm.editProfile = editProfile;

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

    }
})();