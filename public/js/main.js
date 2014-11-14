require.config({
	baseUrl: 'js',
	paths: {
		swig: 'vendor/swig.min',
		less: 'vendor/bower/less/dist/less.min',
		jquery: 'vendor/bower/jquery/dist/jquery.min',
		underscore: 'vendor/bower/underscore/underscore',
		backbone: 'vendor/bower/backbone/backbone',
		backboneLocalstorage: 'vendor/bower/backbone.localStorage/backbone.localStorage'
	}
});
require(['less']);
require(['app'], function (app) {
	app.init();
});