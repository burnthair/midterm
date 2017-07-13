$(document).ready(function(){

  // Upon clicking on the curtain, the container holding the seats transitions down onto the screen. Upon moving into place, display header
  $(window).on('click', function(){
    $('.container').addClass("container-is-active");
    setTimeout(function() {
      $('#header').fadeTo(2000, 1.0);
    }, 2000);
  });

});

//Upon clicking a seat, select seat
$('div.seat').click(function(){
  $(this).toggleClass('selected-seat')
})

//Reveal UI upon seat selection
$('div.seat').click(function (){
  $('#ui').removeClass('hidden')
});

//this slides up the curtain over 2 seconds on click
function openCurtain(){
  $(".curtain").slideUp(2000);
  $("h1").fadeOut("clickhere");
};
