console.log('hi');

// get user input
const getUserChoice = userInput => {
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
    return userInput;
  }
  else {
    console.log('Please input "rock", "paper", or "scissors".')
  }
}

// generate a random computer selection
const getComputerChoice = () => {
  const computerChoice = Math.floor(Math.random() * 3);
  switch(computerChoice) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
      }
    }

// conditionals for win, lose, or tie
  const determineWinner = (userChoice, computerChoice) => {
    if(userChoice == computerChoice){
      return "You are both tied!";
    }
    if(userChoice == 'rock'){
      if(computerChoice === 'paper'){
        return "You lose. Please play again.";
      }
       else {
        return "You win!";
      }

    }

    if(userChoice === 'paper'){
      if(userChoice === computerChoice){
        return "You are both tied!";}
        if(computerChoice === 'rock'){
          return "You lose. Please play again.";
        }
        else{
          return"You win!";
        }
    }
      if(userChoice === 'scissors'){
      if(userChoice == computerChoice){
      return "You both are tied!"
    }
    if(computerChoice === 'rock'){
      return "You lose. Please play again.";
    }
    else{
      return "You win!";
    }
  }

  }

  // print out the game results
  const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log('You chose: ' + userChoice);
  console.log('The computer chose: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

// run the game
 playGame();







