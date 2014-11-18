require.config({
	baseUrl: 'js',
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		}
	},
	paths: {
		swig: 'vendor/swig.min',
		less: 'vendor/bower/less/dist/less.min',
		jquery: 'vendor/bower/jquery/dist/jquery.min',
		underscore: 'vendor/bower/underscore/underscore',
		backbone: 'vendor/bower/backbone/backbone',
		promise: 'vendor/bower/requirejs-promise/requirejs-promise'
	}
});
require(['less']);
require([
	'backbone',
	'views/app',
	'routers/router'
], function (Backbone, AppView, Workspace) {
	/*jshint nonew:false*/
	// Initialize routing and start Backbone.history()
	new Workspace();
	Backbone.history.start();

	Backbone.emulateJSON = true;

	// Initialize the application view
	new AppView();
});