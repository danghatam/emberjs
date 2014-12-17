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
	this.resource("posts", function(){
		this.resource('post', { path: '/post/:post_id' });
	});
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
App.CommentController = Ember.Controller.extend({
	actions:{
		save: function(post){
			var u = post.get('user');
			console.log(post);
			console.log(u);
			var comment = this.store.createRecord('comment',{
				content: this.get('inputComment'),
				post: post,
				user: u
			});
			this.set('inputComment','');
			comment.save();
		}
	}
});
