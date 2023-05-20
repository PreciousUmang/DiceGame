//For Image 1

var randomNumber1 = Math.floor(Math.random() * 6) + 1; //Creates number 1-6
var randomDiceImage1 = "images/dice" + randomNumber1 + ".png"; //Created dice.img
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage1);

//For Image 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceimage2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceimage2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}

else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";

}
else {
    document.querySelector("h1").innerHTML = "🎌 DRAW! 🎌";
}