// Load the express module
var express = require('express');
// invoke var express and store the resulting application in var app
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// path module is used for handling and transforming file paths
var path = require('path');

// path.join - join all the arguments together and normalize the resulting path
app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, 'bower_components')));

// require the mongoose configuration file
require('./server/config/mongoose.js');

// require the routes.js file
var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(8000, function(){
	console.log("Listening on port 8000");
})

