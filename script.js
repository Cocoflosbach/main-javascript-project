const computerSelection = computerPlay().toLowerCase();

function computerPlay() {
  num = Math.floor(Math.random() * 2);
  if ((num = 0)) {
    return "Rock!";
  } else if ((num = 1)) {
    return "Paper!";
  } else {
    return "Scissors!";
  }
}

function play(playerSelection, computerSelection) {
  let playerScore = 0;
  let computerScore = 0;

  if (
    (playerSelection === "rock" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "scissors")
  ) {
    console.log("We have a tie! Try again.");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    console.log("You Lost! Paper beats Rock");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    console.log("You Won! Scissors beats Paper");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    console.log("You Won! Paper beats Rock");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    console.log("You Lost! Scissors beats Paper");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    console.log("You Lost! Rock beats Scissors");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    computerScore++;
    console.log("You Won! Rock beats Scissors");
  }
  console.log(playerSelection, computerSelection);
  console.log(playerScore, computerScore);
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
    play(playerSelection, computerSelection);
    console.log(play(playerSelection, computerSelection));
  }
  console.log(gameScores());
}
