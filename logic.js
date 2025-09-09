// TODO:
// Display results/score logic
// Decide winner logic

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  let playerWinFlag = "";

  let result = document.createElement("p");

  rock.addEventListener("click", () => {
    playerWinFlag = playRound("rock", getComputerChoice());
  });

  paper.addEventListener("click", () => {
    playerWinFlag = playRound("paper", getComputerChoice());
  });

  scissors.addEventListener("click", () => {
    playerWinFlag = playRound("scissors", getComputerChoice());
  });

  humanScore += playerWinFlag ? 1 : 0;
  computerScore += playerWinFlag ? 0 : 1;
}
/*
 * Returns true if the player wins the round
 */
function playRound(humanChoice, computerChoice) {
  let playerWinFlag = "computer";
  let human = String(humanChoice);

  if (human === "rock" && computerChoice === "paper") {
    results.textContent = "You lose! Paper beats Rock!";
  } else if (human === "paper" && computerChoice === "scissors") {
    results.textContent = "You lose! Scissors beats Paper!";
  } else if (human === "scissors" && computerChoice === "rock") {
    results.textContent = "You lose! Rock beats Scissors!";
  } else if (human === computerChoice) {
    results.textContent =
      "You and the opponent made the same choice! No points added or lost!";
    playerWinFlag = "tie";
  } else {
    results.textContent =
      "You won the round! Your opponent chose: " + computerChoice;
    playerWinFlag = "human";
  }
  return playerWinFlag;
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

function displayGame() {
  const scoreboard = document.querySelector(".scoreboard");

  const gameTitle = document.createElement("h1");
  gameTitle.textContent = "Rock-Paper-Scissors";

  const rock = document.createElement("button");
  rock.textContent = "Rock";

  const paper = document.createElement("button");
  paper.textContent = "Paper";

  const scissors = document.createElement("button");
  scissors.textContent = "Scissors";

  scoreboard.appendChild(gameTitle);
  scoreboard.appendChild(rock);
  scoreboard.appendChild(paper);
  scoreboard.appendChild(scissors);

  function displayResults(humanScore, computerScore) {}
}
