# Show Page
* Review the RESTful routes we've seen so far
* Add description to our campground model
* Show db.collection.drop()
  - delete everything in the db
* Add a show route/template


RESTFUL ROUTES
- convention

name      url      verb    desc.
===============================================
INDEX   /dogs      GET   Display a list of all dog
NEW     /dogs/new  GET   Displays form to make a new dog
CREATE  /dogs      POST  Add new dog to DB
SHOW    /dogs/:id  GET   Shows info about one dog


// SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req, res) {
   // find the campground with provided ID
   // render show template with that campground
    res.send("THIS WILL BE THE SHOW PAGE!");
});
