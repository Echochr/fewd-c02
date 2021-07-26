const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb") {
      return userInput
    } else {
      console.log("Input invalid")
    }
  }
  
  const getComputerChoice = () => {
    const options = ['rock', 'paper', 'scissors']
    const idx = Math.floor(Math.random() * options.length)
    const choice = options[idx]
    return choice
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
      return "Cheat code: User wins!!!"
    }
    if (userChoice === computerChoice) {
      return "Tie"
    }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return "CPU wins"
      } else {
        return "User wins"
      }
    }
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return "CPU wins"
      } else {
        return "User wins"
      }
    }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return "CPU wins"
      } else {
        return "User wins"
      }
    }
   }
  
  const playGame = userInput => {
    userChoice = getUserChoice(userInput)
    computerChoice = getComputerChoice()
    console.log(`User input is ${userChoice}`)
    console.log(`CPU choice is ${computerChoice}`)
    console.log(determineWinner(userChoice, computerChoice))
  }
  
  playGame('paper')