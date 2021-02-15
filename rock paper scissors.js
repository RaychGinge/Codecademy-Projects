const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb') {
        return userInput
    } else {
        console.log('Error, please type: rock, paper or scissors');
    }
}

const getComputerChoice = () => {
 const randomNumber = Math.floor(Math.random() * 3);

 switch (randomNumber) {
   case 0:
   return 'rock';
   case 1:
   return 'scissors';
   case 2:
   return 'paper';
 };
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === 'bomb'){
    return 'You won!'
  };
  if (userChoice === computerChoice) {
    return "It's a tie!";
  };

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won.'
    } else {
      return 'You won!';
    };
  };
  if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
          return 'The computer won.';
      } else {
          return 'You won!';
      };
  };
  if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
          return 'The computer won.';
      } else {
          return 'You won!';
      };
  };
}

const playGame = () => {
    let userChoice = getUserChoice('bomb');
    let computerChoice = getComputerChoice();
    console.log('You chose: ' + userChoice);
    console.log('The computer chose: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();