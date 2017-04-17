module.exports = function () {

    var q = require('q');
    var mongoose = require('mongoose');
    var doctorSchema = require('./doctor.schema.server')();
    var doctorModel = mongoose.model('DoctorModel', doctorSchema);


    var api = {
        createDoctor: createDoctor,
        findDoctorById: findDoctorById,
        findDoctorByCredentials: findDoctorByCredentials,
        updateDoctor: updateDoctor,
        deleteDoctor: deleteDoctor
    };

    return api;

    function createDoctor(doctor) {
        var deferred = q.defer();
        doctorModel
            .create(doctor, function (err, doctor) {
                if (err) {
                    deferred.reject(err);
                } else {
                    deferred.resolve(doctor);
                }
            });
        return deferred.promise;
    }

    function findDoctorById(doctorId) {
        var deferred = q.defer();
        doctorModel
            .findById(doctorId, function (err, doctor) {
                if (err) {
                    deferred.reject(new Error(err));
                } else {
                    deferred.resolve(doctor);
                }
            });

        return deferred.promise;
    }

    function findDoctorByCredentials(username, password) {
        var deferred = q.defer();

        doctorModel
            .findOne({username: username, password: password}, function (err, doctor) {
                if (err) {
                    deferred.reject(new Error(err));
                } else {
                    deferred.resolve(doctor)
                }
            });
        return deferred.promise;
    }

    function updateDoctor(doctorId, doctor) {
        var deferred = q.defer();

        doctorModel
            .update({_id: doctorId}, {$set: doctor}, function (err, status) {
                if (err) {
                    deferred.reject(new Error(err));
                } else {
                    deferred.resolve(status);
                }
            });
        return deferred.promise;

    }

    function deleteDoctor(doctorId) {
        var deferred = q.defer();
        doctorModel.remove({_id: doctorId}, function (err, status) {
            if (err) {
                deferred.reject(new Error(err));
            } else {
                deferred.resolve(status);
            }

        });
        return deferred.promise;

    };
};