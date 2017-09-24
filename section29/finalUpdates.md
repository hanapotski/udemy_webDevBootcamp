## Final Updates
* Sanitize blog body
* Style Index
* Update REST Table

npm install express-sanitizer --save

expressSanitizer  = require("express-sanitizer"),

app.use(expressSanitizer());

//create, remove script tags
req.body.blog.body = req.sanitize(req.body.blog.body);

### middleware
