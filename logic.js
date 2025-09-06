// TODO:
// Display results/score logic
// Decide winner logic

let humanScore = 0;
let computerScore = 0;

function playGame() {
  const scoreboard = document.querySelector(".scoreboard");

  const rock = document.createElement("button");
  rock.textContent = "Rock";

  const paper = document.createElement("button");
  paper.textContent = "paper";

  const scissors = document.createElement("button");
  scissors.textContent = "scissors";

  scoreboard.appendChild(rock);
  scoreboard.appendChild(paper);
  scoreboard.appendChild(scissors);

  let result = document.createElement("p");

  rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice(), scoreboard);
  });

  paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice(), scoreboard);
  });

  scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice(), scoreboard);
  });
}

function playRound(humanChoice, computerChoice, scoreboard) {
  let human = String(humanChoice);

  let results = document.createElement("p");
  let score = document.createElement("p");

  if (human === "rock" && computerChoice === "paper") {
    results.textContent = "You lose! Paper beats Rock!";
    computerScore++;
  } else if (human === "paper" && computerChoice === "scissors") {
    results.textContent = "You lose! Scissors beats Paper!";
    computerScore++;
  } else if (human === "scissors" && computerChoice === "rock") {
    results.textContent = "You lose! Rock beats Scissors!";
    computerScore++;
  } else if (human === computerChoice) {
    results.textContent =
      "You and the opponent made the same choice! No points added or lost!";
  } else {
    results.textContent =
      "You won the round! Your opponent chose: " + computerChoice;
    humanScore++;
  }
  score.textContent = humanScore;
  scoreboard.appendChild(score);
  scoreboard.appendChild(results);

  /*
  This part is used to check the winner and to keep track of the score.
  */

  // if (humanScore >= 5) {
  //   let winner = document.createElement("p");
  //   winner.textContent = "You win the game! Congradulations!";
  //   scoreboard.appendChild(winner);
  // } else {
  //   let loser = document.createElement("p");
  //   loser.textContent = "You lost the game! Try Again.";
  //   scoreboard.appendChild(loser);
  // }
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
