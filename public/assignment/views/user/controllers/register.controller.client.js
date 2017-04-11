(function () {
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);

    function RegisterController($location, UserService) {
        var vm = this;

        vm.register = register;

        function register(user) {


            if (user != null) {

                if (user.username != null && user.password != null) {
                    UserService.createUser(user)
                        .then(function (newUser) {
                            $location.path("/user/" + newUser.data.user._id);
                        });

                } else {
                    alert("Invalid entry");
                }

            } else {
                alert("Please fill the required fields");
            }

            //     UserService
            //         .findUserByUsername(user.username)
            //         .success(function (user) {
            //             vm.error = "sorry that username is taken"
            //         })
            //         .error(function(){
            //             UserService
            //                 .createUser(user)
            //                 .success(function(user){
            //                     $location.url('/user/' + user._id);
            //                 })
            //                 .error(function () {
            //                     vm.error = 'sorry could not register';
            //                 });
            //         });
            // }
        }
    }
})();