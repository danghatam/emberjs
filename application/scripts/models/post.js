App.Post = DS.Model.extend({
	time: DS.attr('string'),
	content: DS.attr('string'),
	comments: DS.hasMany('comment', {async: true, embedded: 'always'}),
	user: DS.belongsTo('user', {async: true, embedded: 'always'})
});
