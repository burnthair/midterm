console.log('Have fun!');

//Upon click, select seat
$('div.seat').click(function(){
  $(this).toggleClass('selected-seat')
})


//Reveal UI upon seat selection
$('div.seat').click(function (){
  $('#ui').removeClass('hidden')
});

//Hide UI when no seats are selected
