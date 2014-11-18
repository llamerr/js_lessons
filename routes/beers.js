var express = require('express');
var Beer = require('../models/beer');

// Create our Express router
var router = express.Router();

// Initial dummy route for testing
// http://localhost:3000/api
router.get('/', function (req, res) {
	res.json({message: 'You are running dangerously low on beer!'});
});

// Create a new route with the prefix /beers
var beersRoute = router.route('/beers');

// Create endpoint /api/beers for POSTS
beersRoute.post(function (req, res) {
	// Create a new instance of the Beer model
	var beer = new Beer();

	// Set the beer properties that came from the POST data
	beer.name = req.body.model.name;
	beer.type = req.body.model.type;
	beer.quantity = req.body.model.quantity;

	// Save the beer and check for errors
	beer.save(function (err) {
		if (err)
			res.send(err);

		res.json({message: 'Beer added to the locker!', data: beer});
	});
});

// Create endpoint /api/beers for GET
beersRoute.get(function (req, res) {
	// Use the Beer model to find all beer
	Beer.find(function (err, beers) {
		if (err)
			res.send(err);

		res.json(beers);
	});
});

// Create a new route with the /beers/:beer_id prefix
var beerRoute = router.route('/beers/:beer_id');

// Create endpoint /api/beers/:beer_id for GET
beerRoute.get(function (req, res) {
	// Use the Beer model to find a specific beer
	Beer.findById(req.params.beer_id, function (err, beer) {
		if (err)
			res.send(err);

		res.json(beer);
	});
});

// Create endpoint /api/beers/:beer_id for PUT
beerRoute.put(function (req, res) {
	// Use the Beer model to find a specific beer
	Beer.findById(req.params.beer_id, function (err, beer) {
		if (err)
			res.send(err);

		var model = JSON.parse(req.body.model)
		beer.quantity = model.quantity;
		beer.name = model.name;
		beer.type = model.type;

		// Save the beer and check for errors
		beer.save(function (err) {
			if (err)
				res.send(err);

			res.json(beer);
		});
	});
});

// Create endpoint /api/beers/:beer_id for DELETE
beerRoute.delete(function (req, res) {
	// Use the Beer model to find a specific beer and remove it
	Beer.findByIdAndRemove(req.params.beer_id, function (err) {
		if (err)
			res.send(err);

		res.json({message: 'Beer removed from the locker!'});
	});
});

module.exports = router;