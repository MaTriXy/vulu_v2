// setup config first before anything by requiring it
var config = require('./config/config');
var express = require('express');
var app = express();
var logger = require('./util/logger');

console.log(config.port);
app.listen(config.port);


var __dirname = '../client/dist';
app.use(express.static("dist"));

// export the app for testing
module.exports = app;
