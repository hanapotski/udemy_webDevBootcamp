## Blog Index
* Setup the Blog App
* Create the Blog model
* Add INDEX route and template

#### Semantic UI- https://semantic-ui.com/

mkdir restfulblogapp
npm init
touch app.js

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
