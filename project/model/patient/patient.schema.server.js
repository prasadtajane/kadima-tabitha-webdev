module.exports = function () {
   var mongoose = require('mongoose');

   var PatientSchema = mongoose.Schema ({
       username: String,
       password: String,
       firstName: String,
       lastName: String,
       email: String,
       cellPhone: String,
       workPhone: String,
       homePhone: String,
       pmof: ['call cell phone', 'text cell Phone', 'home phone', 'work phone'],
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
           'Sexually Transmitted Disease', 'Stroke', 'Thyroid Disease', 'Tuberculosis'],
       school: [{type: mongoose.Schema.ObjectId, ref: 'SchoolModel'}],
       doctors:[{type: mongoose.Schema.ObjectId, ref: 'DoctorModel'}]
   }, {collection: 'patients'});

   return PatientSchema;
};