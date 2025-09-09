function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  let playerWinFlag = "";

  const scoreboard = document.querySelector(".scoreboard");

  // Creates game title
  const gameTitle = document.createElement("h1");
  gameTitle.textContent = "Rock-Paper-Scissors";

  // Displays text results
  const results = document.createElement("p");

  // Displays score count for human player
  const score = document.createElement("p");
  score.textContent = humanScore;

  // Displays choices for human player
  const rock = document.createElement("button");
  rock.textContent = "Rock";
  const paper = document.createElement("button");
  paper.textContent = "Paper";
  const scissors = document.createElement("button");
  scissors.textContent = "Scissors";

  rock.addEventListener("click", () => {
    playerWinFlag = playRound("rock", getComputerChoice());
    scoreUpdater();
    results.textContent = decideWinner(playerWinFlag);
  });

  paper.addEventListener("click", () => {
    playerWinFlag = playRound("paper", getComputerChoice());
    scoreUpdater();
    results.textContent = decideWinner(playerWinFlag);
  });

  scissors.addEventListener("click", () => {
    playerWinFlag = playRound("scissors", getComputerChoice());
    scoreUpdater();
    results.textContent = decideWinner(playerWinFlag);
  });

  function scoreUpdater() {
    if (playerWinFlag === "human") {
      humanScore++;
      score.textContent = humanScore;
    } else if (playerWinFlag === "computer") {
      computerScore++;
    }
  }

  scoreboard.appendChild(gameTitle);
  scoreboard.appendChild(results);
  scoreboard.appendChild(score);
  scoreboard.appendChild(rock);
  scoreboard.appendChild(paper);
  scoreboard.appendChild(scissors);
}

/*
 * Returns a string flag to signify who the winner of the round is
 */
function playRound(humanChoice, computerChoice) {
  let playerWinFlag = "computer";
  let human = String(humanChoice);

  if (human === "rock" && computerChoice === "paper") {
    return playerWinFlag;
  } else if (human === "paper" && computerChoice === "scissors") {
    return playerWinFlag;
  } else if (human === "scissors" && computerChoice === "rock") {
    return playerWinFlag;
  } else if (human === computerChoice) {
    playerWinFlag = "tie";
  } else {
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

function decideWinner(playerWinFlag) {
  if (playerWinFlag === "human") {
    return "You won the round!";
  } else if (playerWinFlag === "computer") {
    return "You lost the round!";
  } else if (playerWinFlag === "tie") {
    return "The round was a tie!";
  }
}
