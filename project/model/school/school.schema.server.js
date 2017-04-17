(module.export = function () {
    var mongoose = require('mongoose');

    var SchoolSchema = mongoose.Schema({
        name: String,
        degree: String,
        yog: String
    }, {collection: 'school'});

    return SchoolSchema;
});