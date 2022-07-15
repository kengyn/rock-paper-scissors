//computer selection
function computerPlay() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

//comparing player and computer choices and declaring winner
function playRound(selection) {
  let playerSelec = selection;
  let computer = computerPlay();
  //log each round
  log(playerSelec, computer);
  //compare
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
  }
}

// count total number of wins
let playerWin = 0;
let computerWin = 0;
function game(result) {
  if (result == "win") {
    playerWin++;
  } else if (result == "lose") {
    computerWin++;
  }
  checkWinner();
}
//first to reach 5 wins
let checkWinner = () => {
  const winnerDiv = document.createElement("div");
  if (playerWin == 5) {
    winnerDiv.textContent = "Winner: Player!!";
    score.appendChild(winnerDiv);
  } else if (computerWin == 5) {
    winnerDiv.textContent = "Winner: Computer!!";
    score.appendChild(winnerDiv);
  }
};

//DOM
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
    div.textContent = `winner winner ${player} beats ${computer}`;
    score.appendChild(div);
  } else if (result == "lose") {
    div.textContent = `loser loser ${computer} beats ${player}`;
    score.appendChild(div);
  } else if (result == "tie") {
    div.textContent = "tie";
    score.appendChild(div);
  }
}
