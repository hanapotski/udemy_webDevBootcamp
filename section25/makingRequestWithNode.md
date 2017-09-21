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


var request = require('request');
request('http://www.google.com', function (error, response, body){
    if(error) {
        console.log("SOMETHING WENT WRONG!");
        console.log(error);
    } else {
        if(response.statusCode == 200){
            //THINGS WORKED!
            console.log(body);
        }
    }
});

https://query.yahooapis.com/v1/public/yql?q=select%20astronomy.sunset%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22maui%2C%20hi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys
%20 - space
