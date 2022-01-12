var randomNumber1 = Math.floor((Math.random())*6) + 1;
var imgsrc = "images/dice"+randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",imgsrc);

var randomNumber2 = Math.floor((Math.random())*6) + 1;
var img2src = "images/dice"+randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",img2src);

if(randomNumber1 > randomNumber2){document.querySelector("h1").textContent = "🚩Player 1 Wins";}
else if (randomNumber1 < randomNumber2) {document.querySelector("h1").textContent= "Player 2 Wins🚩";}
else {document.querySelector("h1").textContent= "🚩 Draw! 🚩";}
