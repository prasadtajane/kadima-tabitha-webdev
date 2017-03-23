module.exports = function (app) {
    var model = require("./model/models.server")();

    require("./services/user.service.server")(model, app);
    require("./services/website.service.server")(model, app);
    require("./services/page.service.server")(model, app);
    require("./services/widget.service.server")(model, app);
};