module.exports = function (app, model) {
    app.post("/api/doctor", createDoctor);
    app.get("/api/doctor", findDoctor);
    app.put("/api/doctor/:doctorId", updateDoctor);
    app.delete("/api/doctor/:doctorId", deleteDoctor);

    var doctorModel = model.doctorModel;

    function createDoctor(req, res) {
        doctorModel
            .createDoctor(req.body)
            .then(function (doctor) {
                res.send(doctor);
            }, function (err) {
                res.sendStatus(500).send(err);
            });
    }

    function findDoctor(req, res) {
        var username = req.query["username"];
        var password = req.query["password"];
        if(username && password) {
            findDoctorByCredentials(username, password, res);
        } else if(username) {
            findDoctorByUsername(username, res);
        }
    }

    function findDoctorByUsername(req, res) {
        var username = req.query["username"];
        doctorModel
            .findDoctorByUsername(username)
            .then(function (doctor) {
                res.send(doctor);
            }, function (err) {
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

};