define([
	'backbone', 'jquery', 'promise!templates', 'collections/beers'
], function (Backbone, $, tmpl, Beers) {
	var app = Backbone.View.extend({
		el: '#content',

		events: {
			'keyup #filter': 'filterByName',
			'change select': 'updateForm',
			'click #next': 'next',
			'click #prev': 'prev',
			'click #new': 'new',
			'click #save': 'save',
			'click #delete': 'delete'
		},

		initialize: function () {
			var self = this;
			_.each(['reset', 'sync', 'destroy'],function(event){
				this.listenTo(Beers, event, this.render);
			}, this)
			this.listenTo(Beers, 'filter', this.filterByName);
			this.listenTo(Beers, 'all', this.log);

			var html = tmpl.render('holder', {title: 'Beer list'});
			this.$el.html(html)

			Beers.fetch({reset:true});
		},

		log: function() {
			console.log(arguments);
		},

		render: function (beers) {
			var beers_html = (beers instanceof Backbone.Collection ? beers : Beers).toJSON().map(function(beer){ return tmpl.render('option', beer); });
			this.$('select').html(beers_html);
			this.$('select').trigger('change');
		},

		filterByName: function(e){
			var beers = Beers.filterByName(this.$('#filter').val());
			this.render(beers);
		},

		updateForm: function(e){
			if (this.$('select option:selected').length) {
				this.$('form').show();
				var html = tmpl.render('form', Beers.get(this.$('select option:selected').val()).attributes);
				this.$('form').html(html);
				this.delegateEvents();
			} else {
				this.$('form').hide();
			}
		},

		next: function(){
			var next = this.$('select option:selected').next();
			if (next.length) this.$('select').val(next.val());
			this.$('select').trigger('change');
		},

		prev: function(){
			var prev = this.$('select option:selected').prev();
			if (prev.length) this.$('select').val(prev.val());
			this.$('select').trigger('change');
		},

		delete: function(e){
			e.preventDefault();
			Beers.get(this.$('form #id').html()).destroy();
		},

		save: function(e){
			e.preventDefault();
			var obj = {};
			this.$('form input').each(function(i, el){ obj[el.id] = el.value; })
			var beer = Beers.get(this.$('form #id').html());
			beer.set(obj);
			beer.save();
		}
	});

	return app;
})