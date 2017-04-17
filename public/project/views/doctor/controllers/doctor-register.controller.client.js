(function () {
    angular
        .module("BostonHealth")
        .controller("DoctorRegisterController", DoctorRegisterController);


    function DoctorRegisterController($location, DoctorService) {
        var vm = this;

        vm.register = register;
        vm.login = login;
        vm.addSchool = addSchool;

        console.log(vm.model);
        var schools = vm.model.schools;

        function addSchool() {
            schools.push({
                'name' : "",
                'degree' : "",
                'yog' : ""
            });

        };


        function login(username, password) {
            UserService
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


        function register(username, password, vPassword) {
            if (!(password === vPassword)) {
                vm.error = "Error: passwords do not match!";
                return null;
            }

            UserService.findDoctorByUsername(username)
                .then(function (response) {
                    console.log(response);
                    if (response.data.username === username) {
                        vm.error = "Username already in use";
                        return null;
                    }
                    else {
                        var newUser = {username: username, password: password};
                        DoctorService.createDoctor(newDoctor)
                            .then(function (response) {
                                login(username, password);

                            }, function (error) {
                                vm.error = "User Not Created, Error: " + error;
                            })
                    }
                }, function (error) {
                    vm.error = "Error Seaching for User";
                });

        }

    }
})();