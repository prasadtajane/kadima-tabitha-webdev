(function () {
    angular
        .module("BostonHealth")
        .config(configuration);

    function configuration($routeProvider, $httpProvider) {

        $httpProvider.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        $httpProvider.defaults.headers.put['Content-Type'] = 'application/json;charset=utf-8';

        $routeProvider
            .when("/home", {
                templateUrl: "views/user/home.view.client.html"
            })
            .when("/login", {
                templateUrl: "views/user/login.view.client.html",
                controller: "LoginController",
                controllerAs: "model"
            })
            .when("/register", {
                templateUrl: "views/user/register.view.client.html",
                controller: "RegisterController",
                controllerAs: "model"
            })

            .when("/patient/:uid", {
                templateUrl: "views/patient/patient-account.view.client.html",
                controller: "PatientAccountController",
                controllerAs: "model"
            })

            .when("/doctor/:uid", {
                templateUrl: "views/doctor/doctor-profile.view.client.html",
                controller: "DoctorProfileController",
                controllerAs: "model"
            })

            .when("/search", {
                templateUrl: "views/user/search.view.client.html",
                controller: "SearchController",
                controllerAs: "model"
            })

            .when("/", {
                templateUrl: "views/user/home.view.client.html"
            })
            .when("/404", {
                templateUrl: "views/404.view.client.html"
            })
            .otherwise({
                redirectTo: '/404'
            });
    }

})();