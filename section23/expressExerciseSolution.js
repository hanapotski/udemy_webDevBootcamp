// mkdir assignment
// npm init, configure package.json
// touch app.js
// npm install express
//

var express = require("express");
var app = express();

app.get("/", function(req, res){
   res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
   var animal = req.params.animal;
   var sound = "";
   if(animal === "pig"){
       sound = "Oink";
   } else if( animal === "cow"){
       sound = "Moo";
   } else if( animal === "dog"){
       sound = "Woof Woof!";
   } else if( animal === "cat"){
       sound = "Meow";
   }
   res.send("The " + animal + " says " + sound);
});

app.get("/repeat/:word/:times", function(req, res){
   var word = req.params.word;
   var times = req.params.times;
   var output = "";
   for(var i = 0; i < times; i++){
      output += word + " ";
   }
   res.send(output);
});

app.get("*", function(req, res){
   res.send("Sorry, page not found...What are you doing with your life?");
});

// start server
app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server has started!!");
});
