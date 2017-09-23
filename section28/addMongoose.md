# Add Mongoose
* Install and configure Mongoose
* Setup campground model
* Use campground model inside of our routes

var mongoose   = require("mongoose");
mongoose.connect("mongodb://localhost/yelp_camp");


// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
   name: String,
   image: String
});

// Compile to a model
var Campground = mongoose.model("Campground", campgroundSchema);

// create a campground, pass in object, pass in callback function
Campground.create(
   {
      name: "Salmon Creek",
      image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg"

   }, function(err, campground){
      if(err){
         console.log(err);
      } else {
         console.log("NEWLY CREATED CAMPGROUND: ");
         console.log(campground);
      }
   });


mongo
show dbs
use yelp_camp
show collections
db.campgrounds.find()
