module.exports = function (app) {


    var mongoose = require("mongoose");

    var connectionString = 'mongodb://127.0.0.1:27017/projectdb';

    if(process.env.MLAB_USERNAME) {
        connectionString = process.env.MLAB_USERNAME + ":" +
            process.env.MLAB_PASSWORD + "@" +
            process.env.MLAB_HOST + ':' +
            process.env.MLAB_PORT + '/' +
            process.env.MLAB_APP_NAME;
    }


    mongoose.connect(connectionString, function (err, db) {
        if(err){
            console.log(err);
        }
    });
    var model = require('./model/models.server')(mongoose);

    require("./services/user.service.server")(app, model.userModel);
    require("./services/school.service.server")(app, model.schoolModel);
    require("./services/medicine.service.server")(app, model.medicineModel);



};