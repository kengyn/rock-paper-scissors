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

  log(playerSelec, computer);

  if (
    (playerSelec == "rock" && computer == "scissors") ||
    (playerSelec == "scissors" && computer == "paper") ||
    (playerSelec == "paper" && computer == "rock")
  ) {
    pScore.textContent += "x";
    roundWinner(playerSelec, computer, "win");
    game("win");
  } else if (
    (computer == "rock" && playerSelec == "scissors") ||
    (computer == "scissors" && playerSelec == "paper") ||
    (computer == "paper" && playerSelec == "rock")
  ) {
    cScore.textContent += "x";
    roundWinner(playerSelec, computer, "lose");
    game("lose");
  } else {
    tScore.textContent += "x";
    roundWinner(playerSelec, computer, "tie");
    game("tie");
  }
}

// function to loop 5 rounds of rock paper scissors and declare winner
let playerWin = 0;
let computerWin = 0;
let tie = 0;
function game(result) {
  if (result == "win") {
    playerWin++;
  } else if (result == "lose") {
    computerWin++;
  } else {
    tie++;
  }
  checkWinner();
}

let checkWinner = () => {
  if (playerWin == 5) {
    alert("Winner: Player!!");
  } else if (computerWin == 5) {
    alert("Winner: Computer!!!");
  } else if (tie == 5) {
    alert("tie!!!!");
  }
};

let rockbtn = document.querySelector(".rock");
let paperbtn = document.querySelector(".paper");
let scissorsbtn = document.querySelector(".scissors");
let btns = document.querySelectorAll("button");
let score = document.querySelector(".scoreboard");
let pScore = document.querySelector(".playerScore");
let cScore = document.querySelector(".computerScore");
let tScore = document.querySelector(".tie");
let battleLog = document.querySelector(".log");
const div = document.createElement("div");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    playRound(btn.className);
  });
});

function log(player, computer) {
  const p = document.createElement("p");
  p.textContent = `player:${player}\ncomputer:${computer}`;
  battleLog.appendChild(p);
}

function roundWinner(player, computer, result) {
  if (result == "win") {
    div.textContent = `wow sugoi winner winner ${player} beats ${computer}`;
    score.appendChild(div);
  } else if (result == "lose") {
    div.textContent = `lol rekt ${computer} beats ${player}`;
    score.appendChild(div);
  } else if (result == "tie") {
    div.textContent = "tie";
    score.appendChild(div);
  }
}
