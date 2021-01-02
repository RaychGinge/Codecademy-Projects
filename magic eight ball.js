let userName = 'James';

let userQuestion = 'Should I eat the rest of my food?';

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

//returns a string based on whether userName has a truthy or falsy value
userName ? console.log('Hello, ' + userName) : console.log('Hello!');

//communicates with the user to show their question
console.log(`${userName}, you asked: ${userQuestion}`);

//if...else statement version:

/*if (randomNumber === 0) {
    eightBall = 'It is certain.';
} else if (randomNumber === 1) {
    eightBall = 'It is decidedly so.';
} else if (randomNumber === 2) {
    eightBall = 'Reply hazy try again.';
} else if (randomNumber === 3) {
    eightBall = 'Cannot predict now.';
} else if (randomNumber === 4) {
    eightBall = 'Don't count on it.';
} else if (randomNumber === 5) {
    eightBall = 'My sources say no.';
} else if (randomNumber === 6) {
    eightBall = 'Outlook not so good.';
} else if (randomNumber === 7) {
    eightBall = 'Signs point to yes.';
}*/

//switch statement version:
switch (randomNumber) {
    case 0:
        eightBall = 'It is certain.';
    break;

    case 1: 
        eightBall = 'It is decidedly so.';
    break;

    case 2:
        eightBall = 'Reply hazy try again.';
    break;

    case 3:
        eightBall = 'Cannot predict now.';
    break;

    case 4:
        eightBall = "Don't count on it.";
    break;

    case 5:
        eightBall = 'My sources say no.';
    break;

    case 6:
        eightBall = 'Outlook not so good.';
    break;

    case 7:
        eightBall = 'Signs point to yes.';
    break;
}

//print the magic 8 balls' answer
console.log(eightBall);