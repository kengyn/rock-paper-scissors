//computer selection
function computerPlay() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

//player selection with safeguard from wrong choices
// function playerPlay() {
//   let playerSelec = prompt("rock|paper|scissors").toLowerCase();
//   if (
//     playerSelec !== "rock" &&
//     playerSelec !== "paper" &&
//     playerSelec !== "scissors"
//   ) {
//     return playerPlay();
//   } else {
//     return playerSelec;
//   }
// }

//comparing player and computer choices and declaring winner
function playRound(selection) {
  let playerSelec = selection;
  let computer = computerPlay();
  console.log(`player:${playerSelec} - computer:${computer}`);
  if (
    (playerSelec == "rock" && computer == "scissors") ||
    (playerSelec == "scissors" && computer == "paper") ||
    (playerSelec == "paper" && computer == "rock")
  ) {
    console.log(`wow sugoi winner winner ${playerSelec} beats ${computer}`);
    return "win";
  } else if (
    (computer == "rock" && playerSelec == "scissors") ||
    (computer == "scissors" && playerSelec == "paper") ||
    (computer == "paper" && playerSelec == "rock")
  ) {
    console.log(`lol rekt ${computer} beats ${playerSelec}`);
    return "lose";
  } else {
    console.log(`tie`);
    return "tie";
  }
}

//function to loop 5 rounds of rock paper scissors and declare winner
// function game() {
//   let playerWin = 0;
//   let computerWin = 0;
//   let tie = 0;
//   for (let i = 0; i < 5; i++) {
//     let result = playRound();
//     console.log(i);
//     if (result == "win") {
//       playerWin++;
//     } else if (result == "lose") {
//       computerWin++;
//     } else {
//       tie++;
//     }
//     console.log(`player: ${playerWin}\ncomputer: ${computerWin}\ntie ${tie}`);
//   }
//   if (playerWin > computerWin) {
//     console.log("you win!!!");
//   } else if (playerWin < computerWin) {
//     console.log("you lose!!!");
//   } else {
//     console.log("tie!!!!");
//   }
// }

let rockbtn = document.querySelector(".rock");
let paperbtn = document.querySelector(".paper");
let scissorsbtn = document.querySelector(".scissors");
let btns = document.querySelectorAll("button");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    playRound(btn.className);
  });
});
