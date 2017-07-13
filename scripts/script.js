console.log('Have fun!');

//Upon click, select seat
$('div.seat').click(function(){
  $(this).toggleClass('selected-seat')
})


//Reveal UI upon seat selection
$('div.seat').click(function (){
  $('#ui').removeClass('hidden')
});

//Loading user inputs into modal
$('#submit').click(function () {
  var firstName = document.getElementById('fname');
  var lastName = document.getElementById('lname');
  var email = document.getElementById('email');
  var phone = document.getElementById('phone');

console.log(firstName);

})
