(function () {
    angular
        .module("BostonHealth")
        .factory("SchoolService", SchoolService);

    function SchoolService($http) {
        var api = {
            "createSchool" : createSchool,
            "findSchoolById" : findSchoolById,
            "updateSchool" : updateSchool,
            "deleteSchool" : deleteSchool
        };

        return api;

        function createSchool(school) {
            return $http.post("/api/school/", school);
        }

        function findSchoolById(schoolId) {
            return $http.get("/api/school/" + schoolId);
        }


        function updateSchool(schoolId, newSchool) {
            return $http.put("/api/school/" + schoolId, newSchool);
        }

        function deleteSchool(schoolId) {
            return $http.delete("/api/school/:schoolId" + schoolId);
        }


    }
})();