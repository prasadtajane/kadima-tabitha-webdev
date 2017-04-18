module.exports = function (mongoose, q) {

    var patientSchema = require('./patient.schema.server')(mongoose);
    var patientModel = mongoose.model('PatientModel', patientSchema);


    var api = {
        createPatient: createPatient,
        findPatientById: findPatientById,
        findPatientByCredentials: findPatientByCredentials,
        updatePatient: updatePatient,
        deletePatient: deletePatient
    };

    return api;

    function createPatient(patient) {
        var deferred = q.defer();
        patientModel
            .create(patient, function (err, patient) {
                if (err) {
                    deferred.reject(err);
                } else {
                    deferred.resolve(patient);
                }
            });
        return deferred.promise;
    }

    function findPatientById(patientId) {
        var deferred = q.defer();

        patientModel
            .findById(patientId, function (err, patient) {
                if (err) {
                    deferred.reject(new Error(err));
                } else {
                    deferred.resolve(patient);
                }
            });

        return deferred.promise;
    }
    

    function findPatientByCredentials(username, password) {
        var deferred = q.defer();

        patientModel
            .findOne({username: username, password: password}, function (err, patient) {
                if (err) {
                    deferred.reject(new Error(err));
                } else {
                    deferred.resolve(patient)
                }
            });
        return deferred.promise;
    }

    function updatePatient(patientId, patient) {
        var deferred = q.defer();

        patientModel
            .update({_id: patientId}, {$set: patient}, function (err, status) {
                if (err) {
                    deferred.reject(new Error(err));
                } else {
                    deferred.resolve(status);
                }
            });
        return deferred.promise;

    }

    function deletePatient(patientId) {
        var deferred = q.defer();
        patientModel.remove({_id: patientId}, function (err, status) {
            if (err) {
                deferred.reject(new Error(err));
            } else {
                deferred.resolve(status);
            }

        });
        return deferred.promise;

    };
};