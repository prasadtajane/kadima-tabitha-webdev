(module.export = function (mongoose) {

    var SchoolSchema = mongoose.Schema({
        name: String,
        degree: String,
        yog: String
    }, {collection: 'school'});

    return SchoolSchema;
});