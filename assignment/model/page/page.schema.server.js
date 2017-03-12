/**
 * Created by tabitha on 3/5/17.
 */
module.exports = function (mongoose) {
    
    var PageSchema = mongoose.Schema ({
        _website: {type: String, ref: 'PageModel'},
        name: String,
        title: String,
        description: String,
        widgets: [{type: Number, ref: 'WidgetModel'}],
        dateCreated: {type: Date, default: Date.now()}
    }, {collection: 'page' }); 
    
    return PageSchema; 
}; 