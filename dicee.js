var pname1="Player1";
var pname2="Player2";
function getPlayerName(){
  pname1=prompt("Write 1st Player Name:");
  pname2=prompt("Write 2nd Player Name:");
  pname1=pname1.toUpperCase();
  pname2=pname2.toUpperCase();
  document.querySelector(".player1name").innerHTML=pname1;
  document.querySelector(".player2name").innerHTML=pname2;
}

function play(){
  var randomNumber1 = Math.floor(Math.random()*6)+1;
  var imageSrc1 = "images/dice"+randomNumber1+".png";
  document.querySelectorAll("img")[0].setAttribute("src",imageSrc1);

  var randomNumber2 = Math.floor(Math.random()*6)+1;
  var imageSrc2 = "images/dice"+randomNumber2+".png";
  document.querySelectorAll("img")[1].setAttribute("src",imageSrc2);

  if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML= "🏁"+pname1+" Wins ";
  } else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="🏁"+pname2+" Wins ";
  } else{
    document.querySelector("h1").innerHTML="Draw Play again";
  }
}
