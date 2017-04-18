module.exports = function (mongoose, q) {
    var medicineSchema = require('./medicine.schema.server')(mongoose);
    var medicineModel = mongoose.model('medicineModel', medicineSchema);


    var api = {
        createMedicine: createMedicine,
        findMedicineById: findMedicineById,
        findMedicineByCredentials: findMedicineByCredentials,
        updateMedicine: updateMedicine,
        deleteMedicine: deleteMedicine
    };

    return api;

    function createMedicine(medicine) {
        var deferred = q.defer();
        medicineModel
            .create(medicine, function (err, medicine) {
                if (err) {
                    deferred.reject(err);
                } else {
                    deferred.resolve(medicine);
                }
            });
        return deferred.promise;
    }

    function findMedicineById(medicineId) {
        var deferred = q.defer();

        medicineModel
            .findById(medicineId, function (err, medicine) {
                if (err) {
                    deferred.reject(new Error(err));
                } else {
                    deferred.resolve(medicine);
                }
            });
    }

    function findMedicineByCredentials(username, password) {
        var deferred = q.defer();

        medicineModel
            .findOne({username: username, password: password}, function (err, medicine) {
                if (err) {
                    deferred.reject(new Error(err));
                } else {
                    deferred.resolve(medicine)
                }
            });
        return deferred.promise;
    }

    function updateMedicine(medicineId, medicine) {
        var deferred = q.defer();
        medicineModel
            .update({_id: medicineId}, {$set: medicine}, function (err, status) {
                if (err) {
                    deferred.reject(new Error(err));
                } else {
                    deferred.resolve(status);
                }
            });
        return deferred.promise;
    }

    function deleteMedicine(medicineId) {
        var deferred = q.defer();
        medicineModel.remove({_id: medicineId}, function (err, status) {
            if (err) {
                deferred.reject(new Error(err));
            } else {
                deferred.resolve(status);
            }

        });
        return deferred.promise;

    };
};