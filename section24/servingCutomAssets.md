# Styles And Partials

* Show how to properly include public assets
* Properly configure our app to use EJS
* Use partials to dry up our code!

mkdir public
touch public/app.css

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
