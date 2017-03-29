(function () {
    angular
        .module("BostonHealth")
        .config(configuration);

    function configuration($routeProvider) {

        $routeProvider
            .when("/home", {
                templateUrl: "views/home.view.client.html",
                // controller: HomeController,
                // controller: model
            })
            .when("/login", {
                templateUrl: "views/patient/login.view.client.html",
                // controller: LoginController
            })
            .when("/register", {
                templateUrl: "views/patient/patient-register.view.client.html",
                // controller: RegisterController
            })
            .when("/account", {
                templateUrl: "views/patient/patient-account.view.client.html",
                // controller: PatientAccountController
            })
            .when("/search", {
                templateUrl: "views/patient/search.view.client.html",
                // controller: SearchController
            })
            .when("/doctor", {
                templateUrl: "views/doctor/doctor-profile.view.client.html"
            })
            .when("/doctor-register", {
                templateUrl: "views/doctor/doctor-register.view.client.html"
            })
            .otherwise({
                redirectTo: '/'
            });
    }

})();