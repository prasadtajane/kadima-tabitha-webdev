(function () {
    angular
        .module("BostonHealth")
        .factory("PatientService", PatientService);

    function PatientService($http) {
        var api = {
            "createPatient" : createPatient,
            "findPatientById" : findPatientById,
            "findPatientByUsername" : findPatientByUsername,
            "updatePatient" : updatePatient,
            "deletePatient" : deletePatient
        };

        return api;

        function createPatient(patient) {
            return $http.post("/api/patient/", patient);
        }

        function findPatientById(patientId) {
            return $http.get("/api/patient/" + patientId);
        }

        function findPatientByUsername(username) {
            return $http.get("/api/patient?username=" + username);
        }

        function updatePatient(patientId, newPatient) {
            return $http.put("/api/patient/" + patientId, newPatient);
        }

        function deletePatient(patientId) {
            return $http.delete("/api/patient/:patientId" + patientId);
        }


    }
})();