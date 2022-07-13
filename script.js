function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)]
}

function playRound() {
    let playerSelec = prompt('rock|paper|scissors').toLowerCase()
    let computer = computerPlay()
        if ((playerSelec == 'rock' && computer == 'scissors') || (playerSelec == 'scissors' && computer == 'paper') || (playerSelec == 'paper' && computer == 'rock'))  {
            console.log(`wow sugoi winner winner ${playerSelec} beats ${computer}`)
            return 'win'
        } else if ((computer == 'rock' && playerSelec == 'scissors') || (computer == 'scissors' && playerSelec == 'paper') || (computer == 'paper' && playerSelec == 'rock')) {
            console.log(`lol rekt ${computer} beats ${playerSelec}`)
            return 'lose'
        } else if ((computer == 'rock' && playerSelec == 'rock') || (computer == 'scissors' && playerSelec == 'scissors') || (computer == 'paper' && playerSelec == 'paper')){
            console.log('tie')
            return 'tie'
        } else {
            playRound()
        }
    }

function game() {
    let playerWin = 0;
    let computerWin = 0;
    let tie = 0;
    for (let i = 0; i < 5; i++) {
        let result = playRound();
        
        if (result == 'win') {
            playerWin++
        } else if (result == 'lose'){
            computerWin++
        } else {
            tie++
        }
        console.log(`player: ${playerWin}\ncomputer: ${computerWin}\ntie ${tie}`)
    }
    if (playerWin > computerWin) {
        console.log('you win!!!')
    } else if (playerWin < computerWin) {
        console.log('you lose!!!')
    } else {
        console.log('tie!!!!')
    }
}