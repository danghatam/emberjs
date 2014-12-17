App.Comment = DS.Model.extend({
	content: DS.attr('string'),
	post: DS.belongsTo('post', {async: true}),
	user: DS.belongsTo('user', {async: true, embedded: 'always'})
});
