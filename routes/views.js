var express = require('express');

// Create our Express router
var router = express.Router();

// Create a new route with the /beers/:beer_id prefix
var viewsRoute = router.route('/views/:view_id');

// Register all our routes in dir
var fs = require('fs'),
	path = require('path');
var viewsDir = 'views';

// Create endpoint /api/beers/:view_id for GET
viewsRoute.get(function (req, res) {
	var filePath = path.resolve('./', viewsDir, req.params.view_id + '.html');
	fs.readFile(filePath, function (err, data) {
		if (err) throw err;
		res.send(data);
	});
});

module.exports = router;