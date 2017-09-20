# JSON AND XML

Human Interface vs API

### The itunes API
Make an HTTP request to:
https://itunes.apple.com/search?term=beyonce&entity=musicVideo

### Make an HTTP request to an API
Get Some Data Back!
* Search for Beyonce Albums
https://itunes.apple.com/search?term=beyonce&entity=album
* Search for Beatles Songs
https://itunes.apple.com/search?term=beatles&entity=song
* Search for Podcasts About "code"
https://itunes.apple.com/search?term=code&entity=podcast
* Search for Harry Potter Movies
https://itunes.apple.com/search?term=harry-potter&entity=movie

### Data Formats
When we use the internet, we make HTTP request and get HTML back.
* API's don't respond with HTML.  HTML contains information about the structure of a page.  API's respond with data, not structure.
* They use simpler data formats like XML and JSON

### XML
Extended Markup Language
* XML is syntacticly similar to HTML, but it does not describe presentation like HTML does
* encode key/value pairs nested each other
<person>
  <age>21</age>
  <name>Travis</name>
  <city>Los Angeles</city>
</person>

### JSON
Javascript Object Notation
* JSON looks exactly like JavaScript objects, but everything is a string
{
 "person": {
   "age": "21",
   "name": "Travis",
   "city": "Los Angeles"
 }
}
