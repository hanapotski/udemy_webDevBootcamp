# Movie API App

General search: http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb

Search with Movie ID: http://www.omdbapi.com/?i=tt3896198&apikey=thewdb

Append &apikey=thewdb to the end of your url

The usage instructions on the OMDB page indicate including the new "apikey=thewdb" after the '?' mark, then add the '&' ampersand. The rest of the search criteria is appended after this '&', like so:

http://www.omdbapi.com/?apikey=thewdb&s=guardians+of+the+galaxy

The same goes for a search with Movie ID: http://www.omdbapi.com/?apikey=thewdb&i=tt3896198


### String query
http://www.omdbapi.com/?apikey=[yourkey]&



mkdir movie_search_app
cd movie_search_app
npm init
touch app.js
npm install --save express ejs request


app.get("/results", function(req, res){
    request("http://www.omdbapi.com/?apikey=thewdb&s=california", function(error, response, body){
       if(!error && response.statusCode == 200) {
           var results = JSON.parse(body)
           res.send(results["Search"][0]);
       }
    });
});
