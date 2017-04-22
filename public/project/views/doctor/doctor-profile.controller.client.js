(function () {
    angular
        .module("BostonHealth")
        .controller("DoctorProfileController", DoctorProfileController);

    function DoctorProfileController($routeParams,UserService) {
        var vm = this;
        vm.editProfile = editProfile;
        vm.userId = $routeParams['uid'];

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