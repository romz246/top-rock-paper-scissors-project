const choices = ['rock', 'paper', 'scissors'];

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
}