console.log('Have fun!');

//this slides up the curtain over 2 seconds on click
function openCurtain(){
  $(".curtain").slideUp(2000);
  $("h1").fadeOut("clickhere");
}
