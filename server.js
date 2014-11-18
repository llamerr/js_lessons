// Load required packages

// Create our Express application
var express = require('express');
var app = express();

// Connect to the beerlocker MongoDB
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/beerlocker');

// Use the body-parser package in our application
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
	extended: true
}));

// Register all our routes in dir
var fs = require('fs'),
	path = require('path');
var RouteDir = 'routes',
	files = fs.readdirSync(RouteDir);
//delay all api responses by 2 seconds
app.use('/api/', function(req, res, next) {
	setTimeout(next, 1000);
});
files.forEach(function (file) {
	var filePath = path.resolve('./', RouteDir, file),
		router = require(filePath);
	app.use('/api/', router);
});

// Serve static files
app.use(express.static('public'));

// Use environment defined port or 3000
var port = process.env.PORT || 3000;

// Start the server
app.listen(port);
console.log('Insert beer on port ' + port);
