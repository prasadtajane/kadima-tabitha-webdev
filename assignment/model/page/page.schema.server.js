/**
 * Created by tabitha on 3/5/17.
 */
module.exports = function (mongoose) {
    var WebsiteSchema = require("../website/website.schema.server"); 
    var WidgetSchema = require("../widget/widget.schema.server"); 
    
    var PageSchema = mongoose.Schema ({
        _website: WebsiteSchema,
        name: String,
        title: String,
        description: String,
        widgets: [WidgetSchema],
        dateCreated: {type: Date, default: Date.now()}
    }, {collection: 'page' }); 
    
    return PageSchema; 
}; 