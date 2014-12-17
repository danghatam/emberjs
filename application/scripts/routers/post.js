App.PostsRoute = Ember.Route.extend({
	model: function(){
		return this.store.find('post');
	},
	setupController: function(controller, model){
		controller.set("posts", model);
	}
});
App.PostRoute = Ember.Route.extend({
	model: function(params){
		return this.store.find('post',params.post_id);
	},
	setupController: function(controller, model){
		controller.set("content", model);
	}
});
