# Post Requests!!!

* Write post routes, and test them with Postman
* Use a form to send a post request
* Use body parser to get form data

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
