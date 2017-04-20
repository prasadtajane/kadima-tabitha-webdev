(function () {
    angular
        .module("BostonHealth")
        .controller("DoctorProfileController", DoctorProfileController);

    function DoctorProfileController($location, $routeParams, DoctorService) {
        var vm = this;
        vm.editProfile = editProfile;
        vm.doctorId = $routeParams['doctorId'];

        function init() {
            var promise = DoctorService.findDoctorById(vm.doctorId);
            promise.success(function (doctor) {
                vm.doctor = doctor;
            });



            // TODO findSchoolsByUser(doctorId)
            vm.schools = [];
        }
        init();



        function editProfile(newDoctor) {
            DoctorService
                .updateUser(userId, newDoctor)
                .success(function (updateUser) {
                    if(updateUser === null) {
                        vm.error = "Error: unable to update user";
                    } else {
                        vm.message = "User successfully update";
                    }
                });

        }



    }
})();