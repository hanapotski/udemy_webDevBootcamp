// Check off Specific Todos By Clicking
$("li").click(function(){
  //if li is gray
  console.log($(this).css("color"));
  if($(this).css("color") === "rgb(128, 128, 128)") {
    //turn it black
    $(this).css({
      color: "black",
      textDecoration: "none"
    });
  }
  //else
  else {
    //turn it gray
    $(this).css({
      color: "gray",
      textDecoration: "line-through"
    });
  }

});
