$(document).ready(function() {

$('.button').fadeIn(3000);
console.log("Hello");
// $('#ball').draggable();
// $('.choiceButton:contains')

$('#leftButton').click(function () {
  $('#ball').animate({left:'-=10px'}, 200);
  console.log("clicked");
});

$('#rightButton').click(function () {
  $('#ball').animate({left:'+=10px'}, 200);
});

$('#topButton').click(function () {
  $('#ball').animate({bottom:'+=10px'}, 200);
});

$('#bottomButton').click(function () {
  $('#ball').animate({bottom:'-=10px'}, 200);
});

$('#red').click(function () {
  $('#ball').css("background-color", "red");
})


$('#green').click(function () {
  $('#ball').css("background-color", "green");
})

$('#blue').click(function () {
  $('#ball').css("background-color", "blue");
})

$('#hide').click(function () {
  $('#ball').toggleClass("hidden");
})

$('#bounce').click(function () {
    $('#ball').effect('bounce', {times: 3}, 500)
})




});
