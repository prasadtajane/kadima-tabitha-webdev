(function () {
    angular
        .module("BostonHealth")
        .factory("SearchService", SearchService);

    function SearchService($http) {
        var service = {
            "findDoctorByName" : findDoctorByName,
            "findAllBostonDoctors" : findAllBostonDoctors
        };

        return service;


        function findDoctorByName(searchTerm) {
            var resource_url = "https://api.betterdoctor.com/2016-03-01/doctors?name=" + searchTerm +
            "&location=42.3601%2C-71.0589%2C100&sort=full-name-asc&skip=0&limit=10&user_key=3326b29298617f06799b6f3677e57396";
            return $http.get(resource_url);
        }


        function findAllBostonDoctors() {
            var resource_url = "https://api.betterdoctor.com/2016-03-01/doctors?location=42.3601%2C-71.0589%2C200&sort=full-name-asc&skip=0&limit=500&user_key=3326b29298617f06799b6f3677e57396";
            return $http.get(resource_url);
            console.log(resource_url);
        }

    }
})();

