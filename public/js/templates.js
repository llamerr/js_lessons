define(['jquery', 'swig'], function ($, swig) {
	var API_URL = '//localhost:3000/api/views/';
	var preload_list = ['holder', 'option', 'form'];

	var deferred = new $.Deferred();

	var TemplateManager = function(manager){
		this.manager = manager;
		this.templates = {};
	}
	TemplateManager.prototype.render = function(name, vars){
		var compiled_html = '';
		if (this.manager == 'swig') {
			compiled_html = swig.render(this.templates[name], { locals: vars })
		}
		return compiled_html;
	}
	TemplateManager.prototype.load_template = function(name){
		return $.ajax( API_URL + name, function(html){
			this.add_template(name, html);
			$(document).trigger('templates:loaded', name);
		});
	}
	TemplateManager.prototype.add_template = function(name, html){
		this.templates[name] = html;
	}
	var tm = new TemplateManager('swig');

	$.when.apply($, preload_list.map(function(name){
		return $.ajax( API_URL + name )
	})).then(function(){
		[].forEach.call(arguments, function(a, i){
			tm.add_template(preload_list[i], a[0]);
		});
		deferred.resolve(tm);
	})

	return deferred.promise();

})