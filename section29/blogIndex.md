## Blog Index
* Setup the Blog App
* Create the Blog model
* Add INDEX route and template

#### Semantic UI- https://semantic-ui.com/

mkdir restfulblogapp
npm init
touch app.js
mkdir views
touch views/index.ejs


* Require Dependencies *
var bodyParser = require("body-parser"),
    mongoose   = require("mongoose"),
    express    = require("express"),
    app        = express();

* App Config *
mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine", "ejs");
app.use(express.static("public")); - serve custom stylesheets
app.use(bodyParser.urlencoded({extended: true}));

* Mongoose/Model Config *
var blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: {type: Date, default: Date.now}
});


* Run Server *
app.listen(process.env.PORT, process.env.IP, function(){
  console.log("Server is running!");
});

* views/index.ejs *
<% blogs.forEach(function(blog){
  <div>
    <h1><%= blog.title %></h1>
    <img src="<%= blog.image %>">
    <p><%= blog.body %></p>
  <div>
<% }) %>
