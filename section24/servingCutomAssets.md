# Styles And Partials

* Show how to properly include public assets
* Properly configure our app to use EJS
* Use partials to dry up our code!

mkdir public
touch public/app.css
mkdir views/partials
touch views/partials/header.ejs
touch views/partials/footer.ejs


### style tag
<style>
    body {
        color: purple;
    }
</style>

### link style
<link rel="stylesheet" href="app.css">
- make folder for all public assets


### app.use
app.use(express.static("public"));
- tell express to serve contents of public directory

### app.set
app.set("view engine", "ejs")
- tell express that we'll use .ejs files

### partials
- files/templates that we can include in other templates
<% include header %>


app.css vs /app.css
- look for app.css not in the same directory but in the root directory

# recap
- create public directory and add stylesheet
- tell express to serve public directory
app.use(express.static("public"));
- tell express that all of the templates will be ejs
app.set("view engine", "ejs");
- create partials directory inside views (layouts)
<% include partials/header %>
