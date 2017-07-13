console.log('Have fun!');

//Upon click, select seat
$('div.seat').click(function(){
  $(this).toggleClass('selected-seat')
})


//Reveal UI upon seat selection
$('div.seat').click(function (){
  $('#ui').removeClass('hidden')
})

//Clicking submit button opens confirmation modal
$('#submit').click(function() {
  $('#modal-container').fadeIn('slow')
})
//Clicking X button on modal closes confirmation modal
$('#close').click(function() {
  $('#modal-container').fadeOut('slow')
})
