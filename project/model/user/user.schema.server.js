module.exports = function (mongoose) {

    var UserSchema = mongoose.Schema({
        username: String,
        password: String,
        firstName: String,
        lastName: String,
        email: String,
        phone: String,
        role: String,

        // Doctor specific attributes
        specialty: String,
        facility: String,
        schools: [{type: mongoose.Schema.ObjectId, ref: 'SchoolModel'}],
        //patients: [{type: mongoose.Schema.ObjectId, ref: 'UserModel'}],

        // Patient Specific attributes
        dob: {type: Date},
        sex: String,
        race: [{type: String}],
        hispanic: Boolean,
        heightFeet: Number,
        heightInches: Number,
        weight: Number,
        medication: [{type: mongoose.Schema.ObjectId, ref: 'MedicineModel'}],
        diseases : [{type: String}],
        smokerStatus : String



    }, {collection: 'user'});

    return UserSchema;

};