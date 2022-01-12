const stone = 1;
const paper = 2;
const scissors = 3;

var num1 = Math.floor((Math.random())*3) + 1;
var img1src = "images/sps"+ num1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",img1src);

var num2 = Math.floor((Math.random())*3) + 1;
var img2src = "images/sps"+ num2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",img2src);

let p1 = 0;
// -1 0 1

// logic
if(num1 == stone){
  if(num2 == scissors){
    // 1 wins
    p1 = 1;
  }
  else if(num2 == paper){
    // 2 wins
    p1 = -1;
  }
  else{
    // draw
    p1 = 0;
  }
}
else if(num1 == paper){
  if(num2 == stone){
    // 1 wins
    p1 = 1;
  }
  else if(num2 == scissors){
    // 2 wins
    p1 = -1
  }
  else{
    // draw
    p1 = 0 
  }
}
else{
  if(num2 == paper){
    // 1 wins
    p1 = 1;
  }
  else if(num2 == stone){
    // 2 wins
    p1 = -1;
  }
  else{
    // draw
    p1 = 0;
  }
}


if(p1 == 1){
  document.querySelector("h1").textContent = "🎌Player 1 Wins";
}
else if (p1 == -1) {
  document.querySelector("h1").textContent= "Player 2 Wins🎌";
}
else {
  document.querySelector("h1").textContent= "🎌 Draw! 🎌";
}
 