
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random() * 10);
}

function compareGuesses(user, computer, target) {
    let userAbs = Math.abs(target - user);
    let computerAbs = Math.abs(target - computer);
    if (computerAbs < userAbs) {
        return false;
    } else if (userAbs < computerAbs) {
        return true;
    } else if (userAbs === computerAbs) {
        return true;
    };
}

function updateScore(winner) {
    switch (winner) {
        case 'human':
            humanScore++;
            break;
        case 'computer':
            computerScore++;
            break;
    };
}

function advanceRound() {
    return currentRoundNumber++;
}