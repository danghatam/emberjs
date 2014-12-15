App = Ember.Application.create({
//	LOG_TRANSITIONS: true,
//	LOG_BINDINGS: true,
//	LOG_VIEW_LOOKUPS: true,
//	LOG_STACKTRACE_ON_DEPRECATION: true,
//	LOG_VERSION: true,
//	debugMode: true
});
App.ApplicationAdapter = DS.RESTAdapter.extend({
		host: 'http://localhost:5500'
});
App.ApplicationStore = DS.Store.extend({
	revision: 11,
	url: "http://localhost:5500"
});
App.Router.map(function(){
	this.resource("timeline");
	this.resource("posts");
	this.resource('post', { path: '/post/:post_id' });
});
App.Post = DS.Model.extend({
	username: DS.attr('string'),
	avatar: DS.attr('string'),
	time: DS.attr('string'),
	content: DS.attr('string'),
	comments: DS.hasMany('comment', {async: true})
});
App.User = DS.Model.extend({
	name: DS.attr('string'),
	avatar: DS.attr('string')
});
App.Comment = DS.Model.extend({
	content: DS.attr('string'),
	post: DS.belongsTo('post', {async: true})
});
App.IndexRoute = Ember.Route.extend({
	redirect: function(){
		this.transitionTo("posts");
	}
});
App.PostsRoute = Ember.Route.extend({
	model: function(){
		return this.store.find('post');
	},
	setupController: function(controller, model){
		model.content[0].get('comments').then(function(comments){console.log(comments);});
		controller.set("posts", model.content);
	}
});
App.PostRoute = Ember.Route.extend({
	model: function(params){
		return this.store.find('post',params.post_id);
	},
	setupController: function(controller, model){
		console.log(model);
		controller.set("content", model);
	}
});
App.TimelineRoute = Ember.Route.extend({
	model: function(){
	},
	setupController: function(){}
});
//App.TimelineController = Ember.Controller.extend({
//	actions: {
//		load: function(){
////			console.log(this.store.all('post'));
//		}
//	}
//});

