/**
 * Created by tabitha on 3/5/17.
 */
module.exports = function (mongoose) {

    var WidgetSchema = mongoose.Schema({
        _page: {type: String, ref: 'WidgetModel'},
        type: {type: String, enum: ['HEADING', 'IMAGE', 'YOUTUBE',
        'HTML', 'INPUT']},
        name: String,
        text: String,
        placeholder: String,
        description: String,
        url: String,
        width: String,
        height: String,
        rows: Number,
        size: Number,
        class: String,
        icon: String,
        deletable: Boolean,
        formatted: Boolean,
        dateCreated: {type: Date, default: Date.now()}
    }, {collection: 'widget'}); 
    
    return WidgetSchema; 
};