module.exports = function () {
   var model = {
       patientModel: require("./patient/patient.model.server")(),
       doctorModel: require("./doctor/doctor.model.server")(),
       medicineModel: require("./medicine/medicine.model.server")(),
       schoolModel: require("./school/school.model.server")()
   };

   return model;
};