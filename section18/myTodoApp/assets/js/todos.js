// Check off Specific Todos By Clicking
$("li").click(function(){
  // //if li is gray
  // if($(this).css("color") === "rgb(128, 128, 128)") {
  //   //turn it black
  //   $(this).css({
  //     color: "black",
  //     textDecoration: "none"
  //   });
  // }
  // //else
  // else {
  //   //turn it gray
  //   $(this).css({
  //     color: "gray",
  //     textDecoration: "line-through"
  //   });
  // }
  $(this).toggleClass("completed");
});

// Click on X to delete Todo
// stopPropagation(), stops event bubbling, event e evt
$("span").click(function(event){
  $(this).parent().remove();
  event.stopPropagation();
});
