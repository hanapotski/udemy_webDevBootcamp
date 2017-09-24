## Putting the C in CRUD
* Add NEW route
* Add NEW template
* Add CREATE route
* Add CREATE template

// NEW ROUTE
app.get("/blogs/new", function(req, res) {
    res.render("new");
});

// CREATE ROUTE
app.post("/blogs", function(req, res) {
   // create blog
   Blog.create(req.body.blog, function(err, newBlog){
     if(err){
       res.render("new");
     } else {
       //then, redirect to the index
       res.redirect("/blogs");
     }
   });
});
