$(document).ready(function(){

  // Upon clicking on the curtain, the container holding the seats transitions down onto the screen. Upon moving into place, display header
  //this slides up the curtain over 2 seconds on click
  $('.curtain').on('click', function(){
    $('.container').addClass("container-is-active");
    $('.curtain').addClass("curtain-is-active");
    $("h1").fadeOut("welcome-message");
    $("h2").fadeOut("intro-message");
    setTimeout(function() {
      $('#header').fadeTo(2000, 1.0);
    }, 2000);
  });


  //Upon clicking a seat, select seat
  $('div.seat').click(function(){
    $(this).toggleClass('selected-seat')
  })

  //Reveal UI upon seat selection
  $('div.seat').click(function (){
    $('#user-inputs').fadeIn()
  });

  // Upon clicking the Submit button, a modal appears
  // Upon clicking the Submit button, the user input is placed into an object
  // The user input is displayed in the modal
  $('#submit').click(function(){
    $('.modal-container').removeClass('hidden');
    $('#user-inputs').fadeOut();
    var reservedSeats = document.getElementsByClassName('reserved-seat')
    var chosenSeats = document.getElementsByClassName("selected-seat");
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
    for (var i = 0; i < chosenSeats.length; i++) {
      $('#insert-seat-ids').append(chosenSeats[i].id + ' ');
      $(chosenSeats[i]).addClass('reserved-seat');
    }
    for (var i=0; i<chosenSeats.length; i++) {
      $(chosenSeats[i]).html('<span class="reserved-by hide">'+patron.firstName+ ' ' +patron.lastName+ '</span>');
    }
    $('.selected-seat').removeClass('selected-seat');
    chosenSeats.length = 0;
  });

  $('.row .seat ').on('mouseenter', function(e) {
    e.target.children[0].className = 'reserved-by';
  }).on('mouseleave', function(e) {
    e.target.children[0].className = 'reserved-by hide';
  });



  $('.modal-container').click(function(){
    $('.modal-container').addClass('hidden');
    $('.insert-first-name').html('<span> </span>');
    $('#insert-last-name').html('<span> </span>');
    $('#insert-phone-number').html('<span> </span>');
    $('#insert-email').html('<span> </span>');
    $('#insert-seat-ids').html('<span> </span>');
    $('form')[0].reset();
  })

});
