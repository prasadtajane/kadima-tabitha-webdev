(module.exports = function (mongoose) {

    var MedicineSchema = mongoose.Schema({
        name: String,
        dosage: Number,
        unit: String
    }, {collection: 'doctor'});

    return MedicineSchema;
});