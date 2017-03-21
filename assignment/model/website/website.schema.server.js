/**
 * Created by tabitha on 3/5/17.
 */
module.exports = function () {

    var mongoose = require("mongoose");

    var WebsiteSchema = mongoose.Schema({
        _user: {type: mongoose.Schema.ObjectId, ref: "UserModel"},
        name: String,
        description: String,
        pages: [{type: mongoose.Schema.ObjectId, ref: "PageModel"}],
        dateCreated: {type: Date, default: Date.now()}
    }, {collection: 'website'});

    return WebsiteSchema; 
};