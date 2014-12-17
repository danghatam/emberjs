dpd.comment.post({
    content: body.comment.content,
    post: body.comment.post,
    user: body.comment.user
}, function(response, error) {
    console.log(body.comment.content);
    console.log(body.comment.post);
    console.log(body.comment.user);
    setResult(response);
});