# Add Seeds File
* Add a seeds.js file
* Run the seeds file every time the server starts

## Error-driven/test-driven development
* write code, get error, write code to make it work

var Campground = require("./models/campground");
var Comment = require("./models/comment");

function seedDB() {
  // Remove all campgrounds
  Campground.remove({}, function(err){
    if(err){
      console.log(err);
    } else {
      console.log("Removed campgrounds");
      // add a few campground
      data.forEach(function(seed){
        Campground.create(seed, function(err, campground){
         if(err){
            console.log(err);
          } else {
            console.log("added a campground");
            // create a comment
            Comment.create(
              {
                text: "This place is great, but I wish there was internet",
                author: "Homer"
              }, function(err, comment){
                if(err){
                  console.log(err);
                } else {
                  campground.comments.push(comment);
                  campground.save();
                  console.log("Created new comment");
                }
              });
          }
        });
      });
    }
  });
}
