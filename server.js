var express = require('express');
var cookieParser = require('cookie-parser');
var mongoose     = require('mongoose');
var session = require('express-session');
var passport = require('passport');

var app = express();

app.use(session({
    secret: 'this is the secret',
    resave: true,
    saveUninitialized: true
}));

app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

mongoose.Promise = global.Promise;
//mongoose.createConnection('mongodb://127.0.0.1:27017/cs4550');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// configure a public directory to host static content
app.use(express.static(__dirname + '/public'));

//require("./assignment/app.js")(app);
require("./project/app.js")(app);
require("./test/app.js")(app);

var port = process.env.PORT || 3000;
app.listen(port);
