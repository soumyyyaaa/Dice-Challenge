var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomNumber1Img = "images/dice" + randomNumber1 + ".png";
var randomNumber2Img = "images/dice" + randomNumber2 + ".png";

var img1 = document.querySelector(".img1").setAttribute("src", randomNumber1Img);
var img2 = document.querySelector(".img2").setAttribute("src", randomNumber2Img);

if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Player 2 Wins!";
} else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 Wins!";
} else {
    document.querySelector("h1").textContent = "Draw !";
}

