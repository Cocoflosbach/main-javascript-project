let playerScore = 0;
let computerScore = 0;

const computerSelection = computerPlay().toLowerCase();

function computerPlay() {
  num = Math.floor(Math.random() * 3);
  if ((num = 0)) {
    return "Rock!";
  } else if ((num = 1)) {
    return "Paper!";
  } else {
    return "Scissors!";
  }
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "scissors")
  ) {
    return "We have a tie! Try again.";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return "You Lost! Paper beats Rock";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return "You Won! Scissors beats Paper";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "You Won! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return "You Lost! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    return "You Lost! Rock beats Scissors";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    computerScore++;
    return "You Won! Rock beats Scissors";
  }
}

function gameScores() {
  if (playerScore < computerScore) {
    return (
      "Player Lost! Player scored " +
      playerScore +
      " and Computer scored " +
      computerScore
    );
  } else {
    return (
      "Player Won! Player scored " +
      playerScore +
      " and Computer scored " +
      computerScore
    );
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt(
      "Your Play! Choose between Rock, Paper and Scissors"
    ).toLowerCase();
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));
  }
  console.log(gameScores());
}
