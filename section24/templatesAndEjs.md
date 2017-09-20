# Rendering HTML and Templates

* Use res.render() to render HTML(from an EJS file)
* Explain what EJS is and why we use it
* Pass variables to EJS templates

mkdir EJSDemo
cd EJSDemo
npm init
ls
touch app.js
npm install express -save
ls
c9 <filename/path to file> - to open file using c9 console
mkdir views
touch views/home.ejs
c9 views/home.ejs
npm install ejs --save
touch views/love.ejs
c9 views/love.ejs


var express = require("express");
var app = express();
// var app = require("express")();

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is listening!!!");
});

// root "/" route
app.get("/", function(req, res){
   res.send("<h1>Welcome to the home page!</h1><h2>blahblah</h2>");
});

// res.render("dogs.html")
- better use templates, ejs

### .ejs
- embedded javascript
- inside views folder


## recap
* send back contents of a file/template in views folder using res.render
* ejs, embedded js, enables us to have dynamic templates, html that will change depending on data  we provide
* .ejs, npm install ejs, use <%= %> to write js code
* pass data through, pass object on res.render call, key/value js object
