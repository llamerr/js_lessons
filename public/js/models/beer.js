/*global define*/
define([
	'underscore',
	'backbone'
], function (_, Backbone) {
	'use strict';

	var Beer = Backbone.Model.extend({
		idAttribute: "_id",
		defaults: {
			"name":     "",
			"type":     "",
			"quantity": "0"
		}
	});

	return Beer;
});