$(document).ready(function(){

  // Upon clicking on the curtain, the container holding the seats transitions down onto the screen. Upon moving into place, display header
  $('.seat').on('click', function(){
    $('.container').addClass("container-is-active");
    setTimeout(function() {
      $('#header').fadeTo(2000, 1.0);
    }, 2000);
  });

});
