function getComputerChoice (computerChoice) {
    const index = Math.floor(Math.random() * 3 + 1)
    
    if (index === 1) {
        computerChoice = "rock"
      }
      if (index === 2) {
        computerChoice = "scissors"
      }
      if (index === 3) {
        computerChoice = "paper"
      }
    
      return computerChoice; 
}  


function playRound(userChoice, computerChoice) {

    if (computerChoice === userChoice) {
      result = 'its a draw!'
    }

    if (computerChoice === 'rock' && userChoice === "paper") {
      result = 'you win!'
      userScore++;
    }
    if (computerChoice === 'rock' && userChoice === "scissors") {
      result = 'you lose!'
      computerScore++;
    }
    if (computerChoice === 'paper' && userChoice === "scissors") {
      result = 'you win!'
      userScore++;
    }
    if (computerChoice === 'paper' && userChoice === "rock") {
      result = 'you lose!'
      computerScore++;
    }
    if (computerChoice === 'scissors' && userChoice === "rock") {
      result = 'you win!'
      userScore++;
    }
    if (computerChoice === 'scissors' && userChoice === "paper") {
      result = 'you lose!'
      computerScore++;
    }

}

let userScore = parseInt(0);
let computerScore = parseInt(0);


function game() {
  for (let i = 0; i < 5; i++) {
    let userChoice = prompt("Choose:")
    let computerChoice = getComputerChoice();
    playRound(userChoice, computerChoice);
    alert(result);
    alert("Your score = " + userScore + " Computer's score = " + computerScore);
  }

 }

 game();
 alert("Game Over=> User("+userScore+") vs Computer("+computerScore+")");

