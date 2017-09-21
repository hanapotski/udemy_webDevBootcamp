# Post Requests!!!

* Write post routes, and test them with Postman
* Use a form to send a post request
* Use body parser to get form data

## post route
- when adding/sending data through
- sign up, database, comment, post

mkdir postrequestdemo
cd postrequestdemo
npm init
npm install express
npm install ejs
touch app.js
c9 app.js
mkdir views
touch views/home.ejs
c9 views/home.ejs
npm install body-parser --save


var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
})

app.get("/friends", function(req, res){
   var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"]
   res.render("friends", {friends: friends});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started!!!");
});


#### input name=""
- key to look it up by inside the route


# recap
- set up post route, app.post
- send post request using postman and form, action and method, name attribute, how data is added to request body
req.body.name, with body-parser
app.use(bodyParser.urlencoded({extended: true}));
- res.redirect, will take a url and trigger route again and run all the codes in the route
