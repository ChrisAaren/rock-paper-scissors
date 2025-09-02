let humanScore = 0;
let computerScore = 0;

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
  if (computerScore > humanScore) {
    console.log("You lost the game! Try Again.");
  } else {
    console.log("You win the game! Congratulations!");
  }
}

function playRound(humanChoice, computerChoice) {
  let human = String(humanChoice);

  if (human === "rock" && computerChoice === "paper") {
    console.log("You lose! Paper beats Rock!");
    computerScore++;
  } else if (human === "paper" && computerChoice === "scissors") {
    console.log("You lose! Scissors beats Paper!");
    computerScore++;
  } else if (human === "scissors" && computerChoice === "rock") {
    console.log("You lose! Rock beats Scissors!");
    computerScore++;
  } else if (human === computerChoice) {
    console.log(
      "You and the opponent made the same choice! No points added or lost!",
    );
  } else {
    console.log("You won the round!");
    console.log("Your opponent chose: ", computerChoice);
    humanScore++;
  }
}

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Enter a choice: ");

  return choice.toLowerCase();
}
