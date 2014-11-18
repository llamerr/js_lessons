/*global define*/
define([
	'jquery',
	'backbone',
	'collections/beers'
], function ($, Backbone, Beers) {
	'use strict';

	var BeerRouter = Backbone.Router.extend({
		routes: {
			'*filter': 'setFilter'
		},

		setFilter: function (param) {
			// Trigger a collection filter event, causing hiding/unhiding
			Beers.trigger('filter');
		}
	});

	return BeerRouter;
});
