var btn = document.getElementById("btn");
// var isWhite = true;
var color = "white";

btn.addEventListener("click", changeColor);

// function changeColor(){
//   if (isWhite === true){
//     document.body.style.backgroundColor = "purple";
//     isWhite = !isWhite;
//   } else {
//     document.body.style.backgroundColor = "white";
//     isWhite = true;
//   }
// }

function changeColor(){
  if (color === "white"){
    document.body.style.backgroundColor = "purple";
    color = "purple";
  } else {
    document.body.style.backgroundColor = "white";
    color = "white";
  }
}
