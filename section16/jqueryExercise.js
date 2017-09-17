// Select all divs and give them a purple background
$("div").css("background", "purple");

// Select the divs with class "highlight" and make them 200px wide
$(".highlight").css("width", "200px");
//div.highlight

// Select the div with id "third" and give it a orange border
$("#third").css("border", "2px dashed orange");

// Bonus: Select the first div only and change its font color to pin
$("div:first-child").css("color", "pink");
//$("div:first")- slower, $("div:first-of-type")

// if(jQuery){
//   alert("jQuery loaded!");
// } else {
//   alert("No jQuery :(");
// }
