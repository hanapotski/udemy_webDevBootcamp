var answer = prompt("Are we there yet?");

while (answer !== "yes" && answer !== "yeah") {
  var answer = prompt("Are we there yet?");
}

alert("YAY, WE MADE IT!!!");


// if (answer === "yes") {
//   alert("YAY, we made it!");
// } else {
//   var answer = prompt("Are we there yet?");
// }


//indexOf()
//indexOf("no"), -1 not present

//VERSION 2
var answer = prompt("Are we there yet?");

while (answer.indexOf("yes") === -1) {
  var answer = prompt("Are we there yet?");
}

alert("YAY, WE MADE IT!!!");
