function getComputerChoice () {
    const index = Math.floor(Math.random() * 3 + 1)
    
    if (index === 1) {
        computerChoice = 'rock'
      }
      if (index === 2) {
        computerChoice = 'scissors'
      }
      if (index === 3) {
        computerChoice = 'paper'
      }
    
      return computerChoice; 
}  

alert(getComputerChoice(1));
