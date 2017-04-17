(module.exports = function () {
    var mongoose = require('mongoose');

    var MedicineSchema = mongoose.Schema({
        name: String,
        dosage: Number,
        unit: String
    }, {collection: 'doctor'});

    return MedicineSchema;
});