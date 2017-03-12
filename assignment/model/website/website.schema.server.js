/**
 * Created by tabitha on 3/5/17.
 */
module.exports = function (mongoose) {

    var WebsiteSchema = mongoose.Schema({
        _user: {type: String, ref: 'UserModel'},
        name: String,
        description: String,
        pages: [{type: Number, ref: 'PageModel'}],
        dateCreated: {type: Date, default: Date.now()}
    }, {collection: 'website'});

    return WebsiteSchema; 
};