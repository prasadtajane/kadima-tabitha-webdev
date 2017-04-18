module.exports = function (mongoose, q) {
    var schoolSchema = require('./school.schema.server')(mongoose);
    var schoolModel = mongoose.model('SchoolModel', schoolSchema);


    var api = {
        createSchool: createSchool,
        findSchoolById: findSchoolById,
        findSchoolByCredentials: findSchoolByCredentials,
        updateSchool: updateSchool,
        deleteSchool: deleteSchool
    };

    return api;

    function createSchool(school) {
        var deferred = q.defer();
        schoolModel
            .create(school, function (err, school) {
                if (err) {
                    deferred.reject(err);
                } else {
                    deferred.resolve(school);
                }
            });
        return deferred.promise;
    }

    function findSchoolById(schoolId) {
        var deferred = q.defer();

        schoolModel
            .findById(schoolId, function (err, school) {
                if (err) {
                    deferred.reject(new Error(err));
                } else {
                    deferred.resolve(school);
                }
        });
    }

    function findSchoolByCredentials(username, password) {
        var deferred = q.defer();

        schoolModel
            .findOne({username: username, password: password}, function (err, school) {
                if (err) {
                    deferred.reject(new Error(err));
                } else {
                    deferred.resolve(school)
                }
            });
        return deferred.promise;
    }

    function updateSchool(schoolId, school) {
        var deferred = q.defer();
        schoolModel
            .update({_id: schoolId}, {$set: school}, function (err, status) {
                if (err) {
                    deferred.reject(new Error(err));
                } else {
                    deferred.resolve(status);
                }
            });
        return deferred.promise;
    }

    function deleteSchool(schoolId) {
        var deferred = q.defer();
        schoolModel.remove({_id: schoolId}, function (err, status) {
            if (err) {
                deferred.reject(new Error(err));
            } else {
                deferred.resolve(status);
            }

        });
        return deferred.promise;

    };
};