(function () {
    angular
        .module("BostonHealth")
        .config(configuration);

    function configuration($routeProvider) {

        $routeProvider
            .when("/home", {
                templateUrl: "views/home.view.client.html"
                // controllers: HomeController,
                // controllers: model
            })
            .when("/login", {
                templateUrl: "views/patient/login.view.client.html"
                // controllers: LoginController
            })
            .when("/register", {
                templateUrl: "views/patient/patient-register.view.client.html"
                // controllers: RegisterController
            })
            .when("/account", {
                templateUrl: "views/patient/patient-account.view.client.html"
                // controllers: PatientAccountController
            })
            .when("/search", {
                templateUrl: "views/patient/search.view.client.html"
                // controllers: SearchController
            })
            .when("/doctor", {
                templateUrl: "views/doctor/doctor-profile.view.client.html"
            })
            .when("/doctor-register", {
                templateUrl: "views/doctor/doctor-register.view.client.html",
                //controllers: DoctorRegisterController,
                //controllerAs: model
            })
            .when("/", {
                templateUrl: "views/home.view.client.html"
            })
            .when("/404", {
                templateUrl: "views/404.view.client.html"
            })
            .otherwise({
                redirectTo: '/404'
            });
    }

})();