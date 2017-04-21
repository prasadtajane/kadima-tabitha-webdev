module.exports = function (mongoose, q) {

    var userSchema = require('./user.schema.server')(mongoose);
    var userModel = mongoose.model('UserModel', userSchema);
    var api = {

        createUser: createUser,
        findUserById: findUserById,
        findUserByUsername: findUserByUsername,
        findUserByCredentials: findUserByCredentials,
        updateUser: updateUser,
        deleteUser: deleteUser,
        addSchool: addSchool
    };

    return api;

    function createUser(user) {
        var deferred = q.defer();
        userModel
            .create(user, function (err, user) {
                if (err) {
                    deferred.reject(err);
                } else {
                    deferred.resolve(user);
                }
            });
        return deferred.promise;
    }

    function findUserByUsername(username) {
        var deferred = q.defer();
        userModel
            .find({username: username}, function (err, user) {
                if (err) {
                    deferred.reject(err);
                    console.log("Found! ")
                } else {
                    deferred.resolve(user);
                }
            });
        return deferred.promise;
    }

    function findUserById(userId) {
        var deferred = q.defer();
        userModel
            .findById(userId, function (err, user) {
                if (err) {
                    deferred.reject(new Error(err));
                } else {
                    deferred.resolve(user);
                }
            });

        return deferred.promise;
    }

    function findUserByCredentials(username, password) {
        var deferred = q.defer();

        userModel
            .find({$and: [{username: username}, {password: password}]}, function (err, user) {
                if (err) {
                    deferred.reject(new Error(err));
                } else {
                    deferred.resolve(user);
                }
            });
        return deferred.promise;
    }

    function updateUser(userId, user) {
        var deferred = q.defer();
        userModel.update(
            {_id: userId},
            {
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            }, function (err, user) {
                if (err) {
                    deferred.reject(err);
                }
                else {
                    deferred.resolve(user);
                }
            });
        return deferred.promise;

    }

    function deleteUser(userId) {
        var deferred = q.defer();
        userModel.remove({_id: userId}, function (err, status) {
            if (err) {
                deferred.reject(new Error(err));
            } else {
                deferred.resolve(status);
            }

        });
        return deferred.promise;

    };


    function addSchool(userId, schoolId) {
        var deferred = q.defer();
        userModel.findById(userId, function (err, user) {
            if (err) {
                deferred.reject(err);
            }
            else {
                user.schools.push(schoolId);
                user.save();
                deferred.resolve();
            }
        });
        return deferred.promise;
    }


};