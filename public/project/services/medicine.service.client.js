(function () {
    angular
        .module("BostonHealth")
        .factory("MedicineService", MedicineService);

    function MedicineService($http) {
        var api = {
            "createMedicine" : createMedicine,
            "findMedicineById" : findMedicineById,
            "updateMedicine" : updateMedicine,
            "deleteMedicine" : deleteMedicine
        };

        return api;

        function createMedicine(medicine) {
            return $http.post("/api/medicine/", medicine);
        }

        function findMedicineById(medicineId) {
            return $http.get("/api/medicine/" + medicineId);
        }
        

        function updateMedicine(medicineId, newMedicine) {
            return $http.put("/api/medicine/" + medicineId, newMedicine);
        }

        function deleteMedicine(medicineId) {
            return $http.delete("/api/medicine/:medicineId" + medicineId);
        }


    }
})();