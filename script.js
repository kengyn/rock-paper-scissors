// let playerChoice = prompt('rock, paper, scissors?', '')

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)]
}

function playRound() {
    let playerSelec = prompt('rock|paper|scissors').toLowerCase()
    let computer = computerPlay()
    let win = `wow sugoi winner winner ${playerSelec} beats ${computer}`
    let lose = `lol rekt ${playerSelec} beats ${computer}`
    if ((playerSelec == 'rock') || (playerSelec == 'scissors') || (playerSelec == 'paper')) {
        if ((playerSelec == 'rock' && computer == 'scissors') || (playerSelec == 'scissors' && computer == 'paper') || (playerSelec == 'paper' && computer == 'rock'))  {
            console.log(win)
        } else if ((computer == 'rock' && playerSelec == 'scissors') || (computer == 'scissors' && playerSelec == 'paper') || (computer == 'paper' && playerSelec == 'rock')) {
            console.log(lose)
        } else {
            console.log('tie')
        }
    } else {
        console.log(`you chose ${playerSelec}. pick rock, paper, or scissors`)
        playRound()
}
}