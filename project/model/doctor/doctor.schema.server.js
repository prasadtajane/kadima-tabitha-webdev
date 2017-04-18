(module.export = function (mongoose) {

    var DoctorSchema = mongoose.Schema({
        username: String,
        password: String,
        firstName: String,
        lastName: String,
        email: String,
        workPhone: String,
        jobTitle: ['doctor', 'nurse practitioner', 'physician assistant','pharmacist'],
        specialities:['primary care', 'allergy and asthma', 'anesthesiology', 'cardiology', 'dermatology',
            'endocrinology', 'gastroenterology', 'general surgery', 'hematology', 'immunology', 'infectious disease',
            'nephrology', 'neurology', 'obstetrics/gynecology', 'hematology', 'oncology', 'ophtmalmology', 'orthopedics',
            'otorhinolaryngology', 'physical therapy', 'psychiatry', 'pulmonary', 'radiology', 'rheumatology', 'urology'
        ],
        facility: String,
        schools:[{type: mongoose.Schema.ObjectId, ref: 'SchoolModel' }],
        patients: [{type: mongoose.Schema.ObjectId, ref: 'PatientModel'}]
    }, {collection: 'doctor'});

    return DoctorSchema;
});