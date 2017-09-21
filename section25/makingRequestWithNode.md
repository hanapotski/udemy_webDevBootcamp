# Make API request with node using curl
- independent of browsers
- using cli, curl <URL>
- json, api

mkdir APIs
cd APIs
touch first_request.js
c9 first_request.js
npm install request

### Simplified HTTP request client. - https://github.com/request/request

var request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

Status Codes:
200 - standard response for successful request
404 status code - not found
