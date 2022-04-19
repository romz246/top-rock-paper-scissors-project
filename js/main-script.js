const choices = ['rock', 'paper', 'scissors'];
const winners = [];

function computerPlay() {
  return choices [Math.floor(Math.random() * choices.length)];
}

function playerPlay() {
  let playerSelection = prompt("Please type 'rock', 'paper' or 'scissors'.");
  playerSelection = playerSelection.toLowerCase();
  let check = confirmChoice(playerSelection);
  while (check === false) {
    playerSelection = prompt("Invalid input! Please type 'rock', 'paper' or 'scissors'.");
    playerSelection.toLowerCase();
    check = confirmChoice(playerSelection);
  }
  return playerSelection;
}

function confirmChoice (choice) {
  return choices.includes(choice);
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerPlay();
  computerSelection = computerPlay();
  const winner = checkWinner(playerSelection, computerSelection);
  console.log("Player picked: " + playerSelection);
  console.log("Computer picked: " + computerSelection);
  console.log(winner);
  winners.push(winner);
}

function checkWinner(playerChoice, ComputerChoice) {
  if (playerChoice === ComputerChoice) {
    return "Tie!";
  } else if (
    (playerChoice === 'rock' && ComputerChoice === 'scissors') ||
    (playerChoice === 'paper' && ComputerChoice === 'rock') ||
    (playerChoice === 'scissors' && ComputerChoice === 'paper')
  ) {
    return "You Won!";
  } else {
    return "Computer Won!";
  }
}

function keepScore() {
  let playerWins = winners.filter((item) => item == "You Won!").length;
  let computerWins = winners.filter((item) => item == "Computer Won!").length;
  let ties = winners.filter((item => item == "Tie!")).length;
  console.log("------------------------");
  console.log("Player wins: " + playerWins);
  console.log("Computer wins: " + computerWins);
  console.log("Ties: " + ties);
  console.log("------------------------");
}

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
    playRound(i);
  }
  keepScore();
}
game();