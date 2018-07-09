var express = require("express");
var consign = require("consign");
var app = express();
var bodyParser = require("body-parser");

// Definition of view engine and views directory
app.set('view engine', 'ejs');
app.set('views','./app/views');

app.use(bodyParser.urlencoded({extended: true}));

//Inclusion of directory routes to our projects
consign()
    .include('./app/routes')
    .then('./config/dbConnection.js')
    .then('app/models')
    .into(app)

module.exports= app;