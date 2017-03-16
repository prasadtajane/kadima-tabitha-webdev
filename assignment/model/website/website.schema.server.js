/**
 * Created by tabitha on 3/5/17.
 */
module.exports = function (mongoose) {

    var UserSchema = require("../user/user.schema.server");
    var PageSchema = require("../page/page.schema.server");

    var WebsiteSchema = mongoose.Schema({
        _user: UserSchema,
        name: String,
        description: String,
        pages: [PageSchema],
        dateCreated: {type: Date, default: Date.now()}
    }, {collection: 'website'});

    return WebsiteSchema; 
};