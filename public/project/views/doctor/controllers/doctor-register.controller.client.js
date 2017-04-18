(function () {
    angular
        .module("BostonHealth")
        .controller("DoctorRegisterController", DoctorRegisterController);


    function DoctorRegisterController($location, DoctorService) {
        var vm = this;

        vm.register = register;
        vm.login = login;


        function init() {
            vm.schools = [];
        }

        function login(username, password) {
            DoctorService
                .findDoctorByCredentials(username, password)
                .then(function (response) {
                    var doctor = response.data;
                    if (doctor === null) {
                        vm.error = "User not found";
                    }
                    else {
                        $location.url("/doctor/" + doctor._id);
                    }
                }, function (error) {
                    vm.error = "Error: " + error;
                })
        }


        function register(doctor) {
            DoctorService
                .findDoctorByUsername(doctor.username)
                .success(function (doctor) {
                    vm.error = "Username already taken";
                })
                .error(function () {
                    DoctorService
                        .createDoctor(doctor)
                        .success(function (newDoctor) {
                            $location.url("/doctor/" + newDoctor._id);
                        })
                        .error(function () {
                            vm.error = "User Registration Failed";
                        })
                })
        }

    }
})();