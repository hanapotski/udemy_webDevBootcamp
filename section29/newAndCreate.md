## Putting the C in CRUD
* Add NEW route
* Add NEW template
* Add CREATE route
* Add CREATE template

// NEW ROUTE
app.get("/blogs/new", function(req, res) {
    res.render("new");
});
