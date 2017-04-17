module.exports = function (app) {

    var model = require("./model/models.server")();

    require("./services/patient.service.server")(app, model);
    require("./services/doctor.service.server")(app, model);
    require("./services/school.service.server")(app, model);
    require("./services/medicine.service.server")(app, model);

};