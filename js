var userWeapon = prompt("Rock, Paper, or Scissors?");
var cpuWeapon = Math.random();
if (cpuWeapon < .34) {
  cpuWeapon = "rock";
}
if (cpuWeapon <= .67) {
  cpuWeapon = "paper";
} else {
  cpuWeapon = "scissors";
}

//Now, we'll start the game
if(userWeapon === null) {
  alert("Oh no, it seems that you didn't enter anything into the box!")
}
function compare(choice1, choice2){
  if (choice1===choice2) {
    alert("It's a tie!");
    return compare;
    
    
  }
  if (choice1==="rock"){
    if (choice2==="scissors"){
      alert("Rock Wins!");
    } else {
      alert("Paper Wins!");
    }
  }
  if (choice1==="scissors"){
    if(choice2==="paper"){
      alert("Scissors Win!");
    }else {
    alert("Rock Wins!");
    }
  }
  if (choice1==="paper"){
    if (choice2==="rock"){
      alert("Paper Wins!");
    }else {
      alert("Scissors Wins!");
    }
  }
}
compare(userWeapon, cpuWeapon);

