/**
 * Created by tabitha on 3/5/17.
 */
module.exports = function() {
    var mongoose = require("mongoose");
    var mongojs = require('mongojs');

    mongoose.connect('mongodb://localhost/cs4800');
    mongojs('web-app-maker');

    var model = {
        userModel : require("./user/user.model.server")(),
        websiteModel : require("./website/website.model.server")(),
        pageModel : require("./page/page.model.server")(),
        widgetModel : require("./widget/widget.model.server")(),
        mongojs : mongojs
    };

    return model;
};