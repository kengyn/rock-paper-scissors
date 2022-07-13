//computer selection
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)]
}

//player selection with safeguard from wrong choices
function playerPlay() {
    let playerSelec = prompt('rock|paper|scissors').toLowerCase()
    if (playerSelec !== 'rock' && playerSelec !== 'paper' && playerSelec !== 'scissors') {
         return playerPlay()
    } else {
        return playerSelec
    }
}

//comparing player and computer choices and declaring winner
function playRound() {
    let playerSelec = playerPlay()
    let computer = computerPlay()
        if ((playerSelec == 'rock' && computer == 'scissors') || (playerSelec == 'scissors' && computer == 'paper') || (playerSelec == 'paper' && computer == 'rock'))  {
            console.log(`wow sugoi winner winner ${playerSelec} beats ${computer}`)
            return 'win'
        } else if ((computer == 'rock' && playerSelec == 'scissors') || (computer == 'scissors' && playerSelec == 'paper') || (computer == 'paper' && playerSelec == 'rock')) {
            console.log(`lol rekt ${computer} beats ${playerSelec}`)
            return 'lose'
        } else {
            console.log(`tie\nplayer:${playerSelec} - computer:${computer}`)
            return 'tie'
    }
}

//function to loop 5 rounds of rock paper scissors and declare winner
function game() {
    let playerWin = 0;
    let computerWin = 0;
    let tie = 0;
    for (let i = 0; i < 5; i++) {
        let result = playRound();
        console.log(i)
        if (result == 'win') {
            playerWin++
        } else if (result == 'lose'){
            computerWin++
        } else{
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