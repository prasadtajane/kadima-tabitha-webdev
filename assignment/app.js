module.exports = function (app) {
    require("./services/user.services.server.js")(app); 
    require("./services/website.services.server.js")(app); 
    require("./services/page.services.server.js")(app); 
    require("./services/widget.services.server.js")(app); 
}