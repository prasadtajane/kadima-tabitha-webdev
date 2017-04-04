var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var passport     = require('passport');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// configure a public directory to host static content
app.use(express.static(__dirname + '/public'));

require("./assignment/app.js")(app);

app.use(cookieParser());
app.use(session({ secret: process.env.SESSION_SECRET }));

app.use(passport.initialize());
app.use(passport.session());

require("./test/app.js")(app);

var port = process.env.PORT || 3000;
app.listen(port); 
