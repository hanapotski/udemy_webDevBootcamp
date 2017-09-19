# Installing and Using Packages

* Use `npm install` to install a package
* Use `require()` to include a package
 - in a js file

mkdir DemoApp
cd DemoApp
touch app.js
ls, open
console.log("FROM APP.js")
cat-me, acsii art
npm install cat-me


### node_modules
- directory automatically created whenever you install a package


var something = require("cat-me");
- will automatically look for a file called cat-me
- includes all the codes and assign to variable
