module.exports = function (mongoose) {

    var UserSchema = mongoose.Schema({
        role: ['patient', 'doctor'],
        username: String,
        password: String,
        firstName: String,
        lastName: String,
        email: String,
        phone: String,

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
        diseases : [{type: String}]
        // diseases: ['Anxiety', 'Asthma', 'Cancer', 'Coagulation Problem', 'Coronary Artery Disease', 'Diabetes',
        //     'Depression', 'Emphysema', 'Heart Attack', 'Hepatitis', 'High Blood Pressure', 'Kidney Disease',
        //     'Sexually Transmitted Disease', 'Stroke', 'Thyroid Disease', 'Tuberculosis']



    }, {collection: 'user'});

    return UserSchema;

};