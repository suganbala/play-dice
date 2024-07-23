
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImage="dice"+randomNumber1+".png";
var randomImageSource="images/"+randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);
 
var randomNumber2 = Math.floor(Math.random()*6+1);
var rwndomDice="dice"+randomNumber2+".png";
var randomImageSource2 = "images/"+rwndomDice;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

if (randomNumber1>randomNumber2) {
    // console.log("player1 wins");
    document.querySelector("h1").innerHTML="player1 wins"
    
}
else if(randomNumber2>randomNumber1){
    // console.log("player2 wins");
    document.querySelector("h1").innerHTML="player2 wins"
}
else{
    // console.log("draw");
    document.querySelector("h1").innerHTML="draw+"

}