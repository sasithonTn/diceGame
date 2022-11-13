var ranPlayer1 = Math.floor(Math.random() * 6 + 1);
console.log("py1: " + ranPlayer1);

var ranPlayer2 = Math.floor(Math.random() * 6 + 1);
console.log("py2: " + ranPlayer2);


document.querySelector(".dice1").setAttribute("src", "images/dice" + ranPlayer1 + ".png");
document.querySelector(".dice2").setAttribute("src", "images/dice" + ranPlayer2 + ".png");

if (ranPlayer1 > ranPlayer2) document.querySelector("h1").innerText = "player1 Win!";
else if (ranPlayer1 === ranPlayer2) document.querySelector("h1").innerText = "Draw!";
else document.querySelector("h1").innerText = "player2 Win!";
