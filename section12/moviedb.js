// movieDB
// Create an array of movie objects.  Each movie should have a title, rating, and hasWatched properties.  Iterate through the array and print out something that looks like:
// You have watched "In Bruges" - 5 stars
// You have not seen "Frozen" - 4.5 stars
// You have seen "Mad Max Fury Road" - 5 stars
// You have not seen "Les Miserables" - 3.5 stars

var movies = [
  {
    title: "Harry Potter",
    rating: 5,
    hasWatched: false
  },
  {
    title: "Frozen",
    rating: 4.5,
    hasWatched: true
  },
  {
    title: "Baby Driver",
    rating: 4,
    hasWatched: false
  },
  {
    title: "Sound of Music",
    rating: 5,
    hasWatched: true
  }
];

// for (var i = 0; i < movies.length; i++){
//   if (movies[i].hasWatched === true){
//     console.log("You have watched \"" + movies[i].title + "\" - " + movies[i].rating + " stars");
//   } else {
//     console.log("You have not seen \"" + movies[i].title + "\" - " + movies[i].rating + " stars");
//   }
// }

//SOLUTION
movies.forEach(function(movie){
  console.log(buildString(movie));
})

function buildString(movie){
  var result = "You have ";
  if(movie.hasWatched){
    result += "watched ";
  } else {
    result += "not seen ";
  }
  result += "\"" + movie.title + "\" - ";
  result += movie.rating + " stars";
  return result;
}
