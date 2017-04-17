module.exports = function (app, model) {
   app.post("/api/patient", createPatient);
   app.get("/api/patient", findPatientByCredentials);
   app.get("/api/patient/:patientId", findPatientById);
   app.put("/api/patient/:patientId", updatePatient);
   app.delete("/api/patient/:patientId", deletePatient);

   var patientModel = model.patientModel;

   function createPatient(req, res) {
       patientModel
           .createPatient(req.body)
           .then(function (patient) {
               res.send(patient);
           }, function (err) {
               res.sendStatus(500).send(err);
           });
   }

   function findPatientByCredentials(req, res) {
       var username = req.query['username'];
       var password = req.query['password'];

       patientModel
           .findPatientByCredentials(req.body)
           .then(function (patient) {
               res.send(patient);
           }, function (err) {
               res.sendStatus(500).send(err);
           });
   }

   function findPatientById(req, res) {
       var patientId = req.params['patientId'];

       patientModel
           .findPatientById(patientId)
           .then(function (patient) {
               res.send(patient);
           }, function (err) {
               res.sendStatus(500).send(err);
           });
   }

   function updatePatient(req, res) {
       var patientId = req.params['patientId'];

       patientModel
           .updatePatient(patientId, req.body)
           .then(function (status) {
               res.send(status);
           }, function (err) {
               res.sendStatus(500).send(err)
           });
   }

   function deletePatient(req, res) {
       patientModel
           .deleteUser(req.params['patientId'])
           .then(function (status) {
               res.send(status);
           }, function (err){
               res.sendStatus(500).send(err);
           });
   }

};