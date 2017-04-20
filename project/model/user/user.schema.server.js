module.exports = function (mongoose) {

    var UserSchema = mongoose.Schema({
        role: ['patient', 'doctor'],
        username: String,
        password: String,
        firstName: String,
        lastName: String,
        email: String,
        workPhone: String,

        // Doctor specific attributes
        specialty: String,
        facility: String,
        schools: [{type: mongoose.Schema.ObjectId, ref: 'SchoolModel'}],
        //patients: [{type: mongoose.Schema.ObjectId, ref: 'UserModel'}],

        // Patient Specific attributes
        cellPhone: String,
        homePhone: String,
        dob: {type: Date},
        sex: ['female', 'male'],
        race: ['American Indian/ Alaska Native', 'Asian', 'Black', 'Native Hawaii or Other Pacific Islander',
            'Other or Multiracial'],
        heightFeet: Number,
        heightInches: Number,
        weight: Number,
        maritalStatus: ['single', 'In a domestic Partnership', 'married'],
        sexualOrientation: ['heterosexual', 'homosexual', 'bisexual', 'pansexual', 'asexual', 'other'],
        medication: [{type: mongoose.Schema.ObjectId, ref: 'MedicineModel'}],
        diseases: ['Anxiety', 'Asthma', 'Cancer', 'Coagulation Problem', 'Coronary Artery Disease', 'Diabetes',
            'Depression', 'Emphysema', 'Heart Attack', 'Hepatitis', 'High Blood Pressure', 'Kidney Disease',
            'Sexually Transmitted Disease', 'Stroke', 'Thyroid Disease', 'Tuberculosis']


    }, {collection: 'yser'});

    return UserSchema;

};