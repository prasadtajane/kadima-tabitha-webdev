module.exports = function (app, userModel) {
    app.get("/api/user", findUser);
    app.get("/api/user/:userId", findUserById);
    app.put("/api/user/:userId", updateUser);
    app.post("/api/user", createUser);
    app.delete("/api/user/:userId", deleteUser);
    app.put("/api/user/:userId/school/:schoolId", addSchool);

    function createUser(req, res) {
        var newUser = req.body;
        console.log(newUser);
        userModel.createUser(newUser)
            .then(function (user) {
                res.json(user);
            }, function (err) {
                console.log(err);
                res.sendStatus(500).send(err);
            });
    }

    function findUser(req, res) {
        var username = req.query["username"];
        var password = req.query["password"];
        if (username && password) {
            findUserByCredentials(req, res);
        } else if (username) {
            findUserByUsername(req, res);
        }
    }

    function findUserByUsername(req, res) {
        var username = req.query["username"];
        userModel
            .findUserByUsername(username)
            .then(function (user) {
                if (user.length != 0) {
                    res.json(user);
                } else {
                    res.sendStatus(500).send('err');
                }
            }, function (err) {
                res.sendStatus(500).send('err');
            });
    }

    function findUserByCredentials(req, res) {
        var username = req.query["username"];
        var password = req.query["password"];
        userModel
            .findUserByCredentials(req.body)
            .then(function (user) {
                res.send(user);
                console.log("found user, sending response");

            }, function (err) {
                res.sendStatus(500).send(err);
                console.log("Unable to find users with these credentials");
            });
    }

    function findUserById(req, res) {
        var userId = req.params['userId'];
        userModel
            .findUserById(userId)
            .then(function (user) {
                res.send(user);
            }, function (err) {
                res.sendStatus(500).send(err);
            });
    }

    function updateUser(req, res) {
        console.log("Reached update user");
        var userId = req.params['userId'];

        userModel
            .updateUser(userId, req.body)
            .then(function (status) {
                res.send(status);
            }, function (err) {
                res.sendStatus(500).send(err)
            });
    }

    function deleteUser(req, res) {
        userModel
            .deleteUser(req.params['userId'])
            .then(function (status) {
                res.send(status);
            }, function (err) {
                res.sendStatus(500).send(err);
            });
    }

    // Doctors only
    function addSchool(req, res) {
        var userId = req.params['userId'];
        var schoolId = req.params['schoolId'];

        userModel
            .addSchool(userId, schoolId)
            .then(function (user) {
                console.log("service server adding doctor's school");
                res.sendStatus(200);
            }, function (err) {
                res.sendStatus(500).send(err);
            })

    }



};