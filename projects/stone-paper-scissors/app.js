const items = ["🪨", "📜", "✂️"];

let num1 = Math.floor((Math.random())*3);
let item1 = items[num1];

let num2 = Math.floor((Math.random())*3);
let item2 = items[num2];

document.getElementById("player1").innerHTML = item1;
document.getElementById("player2").innerHTML = item2;


let p1 = 0;
// -1 0 1

// logic
const stone = 0;
const paper = 1;
const scissors = 2;
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
  document.getElementById("heading").textContent = "🎌Player 1 Wins";
}
else if (p1 == -1) {
  document.getElementById("heading").textContent = "Player 2 Wins🎌";
}
else {
  document.getElementById("heading").textContent = "🎌 Draw! 🎌";
}
 