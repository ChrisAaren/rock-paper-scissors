function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    console.log("rock");
  } else if (randomNumber === 1) {
    console.log("paper");
  } else {
    console.log("scissors");
  }
}
