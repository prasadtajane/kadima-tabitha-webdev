module.exports = function (mongoose) {
    var q = require('q');
    var model = {
        userModel : require("./user/user.model.server")(mongoose, q),
        medicineModel: require("./medicine/medicine.model.server")(mongoose, q),
        schoolModel: require("./school/school.model.server")(mongoose, q)
    };

    return model;
};