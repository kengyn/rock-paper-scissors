let playerChoice = prompt('rock, paper, scissors?', '')

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)]
}