$(document).ready(function(){

  // Upon clicking on the curtain, the container holding the seats transitions down onto the screen. Upon moving into place, display header
  $(window).on('click', function(){
    $('.container').addClass("container-is-active");
    setTimeout(function() {
      $('#header').fadeTo(2000, 1.0);
    }, 2000);
  });

});

//this slides up the curtain over 2 seconds on click
function openCurtain(){
  $(".curtain").slideUp(2000);
  $("h1").fadeOut("clickhere");
};

//Upon clicking a seat, select seat
$('div.seat').click(function(){
  $(this).toggleClass('selected-seat')
})

//Reveal UI upon seat selection
$('div.seat').click(function (){
  $('#ui').removeClass('hidden')
});

// Upon clicking the Submit button, a modal appears
// Upon clicking the Submit button, the user input is placed into an object
// The user input is displayed in the modal
$('#submit').click(function(){
  $('.modal-container').removeClass('hidden');
  var patron = {
    firstName : document.getElementById('fname').value,
    lastName : document.getElementById('lname').value,
    phoneNumber : document.getElementById('phone').value,
    email : document.getElementById('email').value
  }
  $('.insert-first-name').append(patron.firstName);
  $('#insert-last-name').append(patron.lastName);
  $('#insert-phone-number').append(patron.phoneNumber);
  $('#insert-email').append(patron.email);
  var chosenSeats = document.getElementsByClassName("selected-seat");
  for (var i = 0; i < chosenSeats.length; i++) {
    $('#insert-seat-ids').append(chosenSeats[i].id + ' ');
    $(chosenSeats[i]).addClass('reserved-seat');
    
  }
});

$('.modal-container').click(function(){
  $('.modal-container').addClass('hidden');
})
