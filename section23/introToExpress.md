# Introduction to Express

* What is a framework? How is it different from a library?
  - https://stackoverflow.com/questions/3057526/framework-vs-toolkit-vs-library
  - library = code someone else wrote that we can include in our app and use. You have control.
  - framework = you have less control. Some decisions have been made for us. Make app faster
  - flask, django, rails, sinatra, sales js

* What is Express?
  - a web development framework
  - heavy weight or light weight = how much a framework does for you vs how much you do yourself
  - heavy-weight = has a lot of text, few blanks to fill in
  - light-weight = has a lot more blanks, you'll fill in your code more often

* Why are we using Express?
  - most popular web dev framework, widely used
  - light-weight framework
  - doesn't hide things for you
  - you know exactly what you're getting
  - vs Rails, does so much for you but you don't know understand how it works

# Our First Express App!!!!!

* Review an existing app (DogDemo)
* Review HTTP response/request lifecycle
* Create our own simple Express app!

app.get(url, callback function(argument, argument))
app.get("/", function(req, res){
  res.send("Hi there!");
});

- both req and res are objects
- req contains all information about request that was made that triggered the route
- res contains all information about what we're going to respond with

app.listen(port, function);

mkdir FirstExpressApp
cd FirstExpressApp
touch app.js
npm install express


### Routes
* bits of code that will run some other code depending on the request that is received on server
* responsible for listening and receiving requests
* decides what to send back

# NPM Init and Package.json
https://docs.nodejitsu.com/articles/getting-started/npm/what-is-the-file-package-json/
* Use the `--save` flag to install packages
* Explain what the package.json file does
* Use `npm init` to create a new package.json

### package.json
- holds metadata relevant to specific project
- recipe for the ingredients that are needed for a specific package/library
- npm init = create a package.json

### --save
- will take package name and version and will automatically save package.json
- automatically add package as dependency


# More Routing!

* Show the `*` route matcher
* Write routes containing route parameters
* Discuss route order


### * route matcher
- will match anything that comes in
- page not found
- catchall, else
app.get("*", function(req, res){
  res.send("YOU ARE A STAR!");
});

### order of routes
- first route that matches is the only route that will be run
- *, overrides any other routes defined if put at the top

### route parameters
- used to define a pattern in a route
- reddit
app.get("/r/subredditName");
app.get("/r/subredditName/comments/id/title/");
- path variables
app.get("/r/:subredditName", function(){
  res.send("WELCOME TO A SUBREDDIT!");
});
- match anything that comes in /r/any single things following it
app.get("/r/:subredditName/comments/:id/:title/");

### req, res
* req(object) - containss all the information about the incoming req
* console.log(req.params);
* req.params(object) - contains all route parameters and values
