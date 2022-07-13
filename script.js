// let playerChoice = prompt('rock, paper, scissors?', '')

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)]
}

function playRound() {
    let playerSelec = prompt('rock|paper|scissors').toLowerCase()
    let computer = computerPlay()
    // if ((playerSelec == 'rock') || (playerSelec == 'scissors') || (playerSelec == 'paper')) {
        if ((playerSelec == 'rock' && computer == 'scissors') || (playerSelec == 'scissors' && computer == 'paper') || (playerSelec == 'paper' && computer == 'rock'))  {
            console.log(`wow sugoi winner winner ${playerSelec} beats ${computer}`)
            return 'win'
        } else if ((computer == 'rock' && playerSelec == 'scissors') || (computer == 'scissors' && playerSelec == 'paper') || (computer == 'paper' && playerSelec == 'rock')) {
            console.log(`lol rekt ${computer} beats ${playerSelec}`)
            return 'lose'
        } else {
            console.log('tie')
            return 'tie'
        }
    }
    
//     else {
//         console.log(`you chose ${playerSelec}. pick rock, paper, or scissors`)
//         playRound()
// }}

function game() {
    let playerwin = 0;
    let computerwin = 0;
    let tie = 0;
    for (let i = 0; i < 5; i++) {
        let result = playRound();
        
        if (result == 'win') {
            playerwin++
        } else if (result == 'lose'){
            computerwin++
        } else {
            tie++
        }
        console.log(`player: ${playerwin}\ncomputer: ${computerwin}\ntie ${tie}`)
    }
}