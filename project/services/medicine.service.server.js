module.exports = function (app, model) {
    app.post("/api/medicine", createMedicine);
    app.get("/api/medicine/:medicineId", findMedicineById);
    app.put("/api/medicine/:medicineId", updateMedicine);
    app.delete("/api/medicine/:medicineId", deleteMedicine);

    var medicineModel = model.medicineModel;

    function createMedicine(req, res) {
        medicineModel
            .createMedicine(req.body)
            .then(function (medicine) {
                res.send(medicine);
            }, function (err) {
                res.sendStatus(500).send(err);
            });
    }

    function findMedicineById(req, res) {
        var medicineId = req.params['medicineId'];

        medicineModel
            .findMedicineById(medicineId)
            .then(function (medicine) {
                res.send(medicine);
            }, function (err) {
                res.sendStatus(500).send(err);
            });
    }

    function updateMedicine(req, res) {
        var medicineId = req.params['medicineId'];

        medicineModel
            .updateMedicine(medicineId, req.body)
            .then(function (status) {
                res.send(status);
            }, function (err) {
                res.sendStatus(500).send(err)
            });
    }

    function deleteMedicine(req, res) {
        medicineModel
            .deleteUser(req.params['medicineId'])
            .then(function (status) {
                res.send(status);
            }, function (err){
                res.sendStatus(500).send(err);
            });
    }

};