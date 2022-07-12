let playerChoice = prompt('rock, paper, scissors?', '')

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)]
}

function playRound(player, computer) {
    let playerSelec = player.toLowerCase()
    let win = `wow sugoi winner winner ${player} beats ${computer}`
    let lose = `lol rekt ${player} beats ${computer}`
    if ((playerSelec == 'rock' && computer == 'scissors') || (playerSelec == 'scissors' && computer == 'paper') || (playerSelec == 'paper' && computer == 'rock'))  {
        console.log(win)
    } else if ((computer == 'rock' && playerSelec == 'scissors') || (computer == 'scissors' && playerSelec == 'paper') || (computer == 'paper' && playerSelec == 'rock')) {
        console.log(lose)
    } else {
        console.log('tie')
    }
    console.log(`player picked ${player} \n computer picked ${computer}`)
}