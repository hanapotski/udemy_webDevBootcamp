# Refactor Mongoose Code
* Create a models directory
* Use module.exports
* Require everything correctly!

v3
mkdir models
touch models/campground.js
  var mongoose = require("mongoose");
  module.exports = mongoose.model("Campground", campgroundSchema);
app.js
Campground = require("./models/campground");
