var express = require("express");
var consign = require("consign");
var app = express();

// Definition of view engine and views directory
app.set('view engine', 'ejs');
app.set('views','./app/views');

//Inclusion of directory routes to our projects
consign()
    .include('./app/routes')
    .then('./config/dbConnection.js')
    .into(app)

module.exports= app;