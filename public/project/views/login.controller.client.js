(function () {
    angular
        .module("BostonHealth")
        .controller("LoginController", LoginController);


    function LoginController() {

        var vm = this;

        function login(username, password) {
            UserService
                .findDoctorByCredentials(username, password)
                .then(function (response) {
                    var user = response.data;
                    if(user === null){
                        vm.error = "User not found";
                    }
                    else{
                        $location.url("/doctor/" + doctor._id);
                    }
                }, function (error) {
                    vm.error = "Error: " + error;
                })
        }

    }
})();