## SHOWtime
* Add Show route
* Add Show template
* Add links to show page
* Style show template

// SHOW ROUTE
app.get("/blogs/:id", function(req, res) {
   Blog.findById(req.params.id, function(err, foundBlog){
      if(err){
          res.redirect("/blogs");
      } else {
          res.render("show", {blog: foundBlog});
      }
   });
});


<a href="/blogs/<%= blog._id %>">Read More</a>

<span><%= blog.created.toDateString() %></span>
- transform date into another format
- moment js

<%- blog.body %>
- evaluate as code rather than just displaying the string
