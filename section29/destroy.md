## DESTROYYYYYY
* Add Destroy Route
* Add Edit and Destroy Links

// DELETE ROUTE
app.delete("/blogs/:id", function(req, res){
    // destroy blog
    Blog.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/blogs");
        } else {
            res.redirect("/blogs");
        }
    });
});

<a class="ui orange basic button" href="/blogs/<%= blog._id %>/edit">Edit</a>
      <form id="delete" action="/blogs/<%= blog._id %>?_method=DELETE" method="POST">
        <button class="ui red basic button">Delete</button>
