(function () {
    angular
        .module("BostonHealth")
        .factory("DoctorService", DoctorService);

    function DoctorService($http) {
        var api = {
            "createDoctor" : createDoctor,
            "findDoctorById" : findDoctorById,
            "findDoctorByUsername": findDoctorByUsername,
            "findDoctorByCredentials" : findDoctorByCredentials,
            "updateDoctor" : updateDoctor,
            "deleteDoctor" : deleteDoctor
        };

        return api;

        function createDoctor(doctor) {
            console.log("create a doctor");
            return $http.post("/api/doctor/", doctor);
        }

        function findDoctorById(doctorId) {
            return $http.get("/api/doctor/" + doctorId);
        }

        function findDoctorByUsername(username) {
            $http.get("/api/doctor?username" + username);
        }

        function findDoctorByCredentials(username, password) {
            return $http.get("/api/doctor?username=" + username + '&password=' + password);
        }

        function updateDoctor(doctorId, newDoctor) {
            return $http.put("/api/doctor/" + doctorId, newDoctor);
        }

        function deleteDoctor(doctorId) {
            return $http.delete("/api/doctor/:doctorId/")
        }


    }
})();