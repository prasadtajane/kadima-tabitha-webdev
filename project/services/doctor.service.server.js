module.exports = function (app, doctorModel) {
    app.get("/api/doctor", findDoctor);
    app.get("/api/doctor/:doctorId", findDoctorById);
    app.put("/api/user/:userID", updateDoctor);
    app.post("/api/user", createDoctor);
    app.delete("/api/user/:doctorId", deleteDoctor);
    app.put("/api/user/:doctorId/school/:schoolId", addSchool);

    function createDoctor(req, res) {
        console.log("creating the doctor -- service server");
        var newDoctor = req.body;
        console.log(newDoctor);
        doctorModel.createDoctor(newDoctor)
            .then(function (doctor) {
                res.json(doctor);
            }, function (err) {
                res.sendStatus(500).send(err);
            });
    }

    function findDoctor(req, res) {
        console.log("server finding doctor, general");
        var username = req.query["username"];
        var password = req.query["password"];
        if(username && password) {
            findDoctorByCredentials(username, password, res);
        } else if(username) {
            console.log("  only found username, finding by username");
            findDoctorByUsername(username, res);
        }
    }

    function findDoctorByUsername(req, res) {
        var username = req.query["username"];
        console.log("server - looking for username : " + username);
        doctorModel
            .findDoctorByUsername(username)
            .then(function (doctor) {
                res.send(doctor);
            }, function (err) {
                console.log("couldn't find doctor with username " + username);
                res.sendStatus(500).send(err);
            });
    }

    function findDoctorByCredentials(req, res) {
        var username = req.query['username'];
        var password = req.query['password'];
        doctorModel
            .findDoctorByCredentials(req.body)
            .then(function (doctor) {
                res.send(doctor);
            }, function (err) {
                res.sendStatus(500).send(err);
            });
    }

    function findDoctorById(req, res) {
        var doctorId = req.params['doctorId'];
        doctorModel
            .findDoctorById(doctorId)
            .then(function (doctor) {
                res.send(doctor);
            }, function (err) {
                res.sendStatus(500).send(err);
            });
    }

    function updateDoctor(req, res) {
        var doctorId = req.params['doctorId'];

        doctorModel
            .updateDoctor(doctorId, req.body)
            .then(function (status) {
                res.send(status);
            }, function (err) {
                res.sendStatus(500).send(err)
            });
    }

    function deleteDoctor(req, res) {
        doctorModel
            .deleteUser(req.params['doctorId'])
            .then(function (status) {
                res.send(status);
            }, function (err) {
                res.sendStatus(500).send(err);
            });
    }

    function addSchool (req, res) {
        var doctorId = req.params['doctorId'];
        var schoolId = req.params['schoolId'];

        doctorModel
            .addSchool(doctorId, schoolId)
            .then(function (doctor) {
                console.log("service server adding doctor's school" );
                res.sendStatus(200);
            }, function (err) {
                res.sendStatus(500).send(err);
            })

    }

};