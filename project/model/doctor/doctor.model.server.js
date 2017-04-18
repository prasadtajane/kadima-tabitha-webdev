module.exports = function (mongoose, q) {

    var doctorSchema = require('./doctor.schema.server')(mongoose);
    var doctorModel = mongoose.model('DoctorModel', doctorSchema);

    var api = {

        createDoctor: createDoctor,
        findDoctorById: findDoctorById,
        findDoctorByCredentials: findDoctorByCredentials,
        updateDoctor: updateDoctor,
        deleteDoctor: deleteDoctor,
        addSchool : addSchool
    };

    return api;

    console.log("Doctor api created");
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
            .find([{username: username, password: password}], function (err, doctor) {
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
        doctorModel.update(
            { _id : doctorId },
            {
                username: doctor.username,
                firstName: doctor.firstName,
                lastName: doctor.lastName,
                email: doctor.email
            }, function (err, user) {
                if(err){
                    deferred.reject(err);
                }
                else {
                    deferred.resolve(user);
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



    function addSchool(doctorId, schoolId) {
        var deferred = q.defer();
        UserModel.findById(doctorId, function (err, doctor) {
            if(err){
                deferred.reject(err);
            }
            else {
                doctor.schools.push(schoolId);
                doctor.save();
                deferred.resolve();
            }
        });
        return deferred.promise;
    }
};