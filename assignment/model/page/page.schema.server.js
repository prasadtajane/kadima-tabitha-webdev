/**
 * Created by tabitha on 3/5/17.
 */
module.exports = function () {

    var mongoose = require('mongoose');

    var PageSchema = mongoose.Schema ({
        _website: {type: mongoose.Schema.ObjectId, ref: 'WebsiteModel'},
        name: String,
        title: String,
        description: String,
        widgets: [{type: mongoose.Schema.ObjectId, ref: 'WidgetModel'}],
        dateCreated: {type: Date, default: Date.now()}
    }, {collection: 'page' }); 
    
    return PageSchema; 
}; 