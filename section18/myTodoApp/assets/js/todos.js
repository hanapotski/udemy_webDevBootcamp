// Check off Specific Todos By Clicking
// we can only add a listener using jquery on elements that exists when the code is run the first time
// we don't have all the lis yet
// add listener to entire ul parent
// 2nd argument, when an li is clicked inside a ul
// we're adding event listeners to the elements that exist when page loads so that we can account for elements that aren't there yet
$("ul").on("click", "li", function(){
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
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});


// select input and check if the char code is 13
$("input[type='text']").keypress(function(event){
  if(event.which ===13){
    // grabbing new todo text from input
    var todoText = $(this).val();
    // set to clear
    $(this).val("");
    // create a new li and add to ul, append(), select element to append, give a string of html
    $("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i> </span>" + todoText + "</li>");
  }
});

// select icon fa-pencil
$(".fa-pencil").click(function(){
  $("input[type='text']").fadeToggle();
});
