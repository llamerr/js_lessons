/*global define */
define([
	'underscore',
	'backbone',
	'models/beer'
], function (_, Backbone, Beer) {
	'use strict';

	var BeersCollection = Backbone.Collection.extend({
		// Reference to this collection's model.
		model: Beer,
		url: '/api/beers',

		light: function () {
			return this.where({type: 'light'});
		},

		dark: function () {
			return this.where({type: 'dark'});
		},

		filterByName: function(name) {
			return new BeersCollection(this.filter(function(beer) {
				return beer.get('name').indexOf(name) != -1;
			}));
		}
	});

	return new BeersCollection();
});
