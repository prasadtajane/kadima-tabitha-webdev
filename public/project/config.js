(function () {
    angular
        .module("BostonHealth")
        .config(configuration);

    function configuration($routeProvider, $httpProvider) {

        $httpProvider.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        $httpProvider.defaults.headers.put['Content-Type'] = 'application/json;charset=utf-8';

        $routeProvider
            .when("/home", {
                templateUrl: "views/home.view.client.html"
                // controller: HomeController,
                // controller: model
            })
            .when("/login", {
                templateUrl: "views/login.view.client.html",
                controller: "LoginController",
                controllerAs: "model"
            })
            .when("/register", {
                templateUrl: "views/patient/patient-register.view.client.html"
                // controller: RegisterController
            })
            .when("/patient", {
                templateUrl: "views/patient/patient-account.view.client.html"
                // controller: PatientAccountController
            })
            .when("/search", {
                templateUrl: "views/patient/search.view.client.html"
                // controllers: SearchController
            })
            .when("/doctor", {
                templateUrl: "views/doctor/doctor-profile.view.client.html",
                controller: "DoctorProfileController",
                controllerAs: "model"
            })
            .when("/doctor-register", {
                templateUrl: "views/doctor/doctor-register.view.client.html",
                controller: "DoctorRegisterController",
                controllerAs: "model"
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