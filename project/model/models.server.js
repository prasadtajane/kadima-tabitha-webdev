module.exports = function (mongoose) {
    var q = require('q');
    var model = {
        patientModel: require("./patient/patient.model.server")(mongoose, q),
        doctorModel: require("./doctor/doctor.model.server")(mongoose, q),
        medicineModel: require("./medicine/medicine.model.server")(mongoose, q),
        schoolModel: require("./school/school.model.server")(mongoose, q)
    };

    return model;
};