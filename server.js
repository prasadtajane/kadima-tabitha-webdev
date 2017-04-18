var express = require('express');
var cookieParser = require('cookie-parser');
//var session      = require('express-session');
// var passport     = require('passport');
var mongoose     = require('mongoose');

var app = express();

mongoose.Promise = global.Promise;
mongoose.createConnection('mongodb://127.0.0.1:27017/cs4550');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// configure a public directory to host static content
app.use(express.static(__dirname + '/public'));

require("./assignment/app.js")(app);


// app.use(cookieParser());
// app.use(session({ secret: "secret" }));

// app.use(passport.initialize());
// app.use(passport.session());

require("./test/app.js")(app);

var port = process.env.PORT || 3000;
app.listen(port); 
