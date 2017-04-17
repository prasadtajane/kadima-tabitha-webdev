module.exports = function (app, model) {
    app.post("/api/school", createSchool);
    app.get("/api/school/:schoolId", findSchoolById);
    app.put("/api/school/:schoolId", updateSchool);
    app.delete("/api/school/:schoolId", deleteSchool);

    var schoolModel = model.schoolModel;

    function createSchool(req, res) {
        schoolModel
            .createSchool(req.body)
            .then(function (school) {
                res.send(school);
            }, function (err) {
                res.sendStatus(500).send(err);
            });
    }

    function findSchoolById(req, res) {
        var schoolId = req.params['schoolId'];

        schoolModel
            .findSchoolById(schoolId)
            .then(function (school) {
                res.send(school);
            }, function (err) {
                res.sendStatus(500).send(err);
            });
    }

    function updateSchool(req, res) {
        var schoolId = req.params['schoolId'];

        schoolModel
            .updateSchool(schoolId, req.body)
            .then(function (status) {
                res.send(status);
            }, function (err) {
                res.sendStatus(500).send(err)
            });
    }

    function deleteSchool(req, res) {
        schoolModel
            .deleteUser(req.params['schoolId'])
            .then(function (status) {
                res.send(status);
            }, function (err){
                res.sendStatus(500).send(err);
            });
    }

};