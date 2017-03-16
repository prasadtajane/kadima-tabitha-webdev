/**
 * Created by tabitha on 3/5/17.
 */
module.exports = function() {
    var mongoose = require("mongoose");
    var mongojs = require('mongojs');

    mongoose.connect('mongodb://localhost/web-app-maker');
    mongojs('web-app-maker');

    var model = {
        userModel : require("./user/user.model.server")(mongoose),
        websiteModel : require("./website/website.model.server")(mongoose),
        pageModel : require("./page/page.model.server")(mongoose, websiteModel),
        websiteModel : require("./widget/widget.model.server")(mongoose, websiteModel),
        mongojs : mongojs
    };

    return model;
};