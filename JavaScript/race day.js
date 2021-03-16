let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;

let runnerAge = 25;

if (runnerAge > 18 && registeredEarly === true) {
    raceNumber = raceNumber + 1000;
}


if (runnerAge >= 18 && registeredEarly === true) {
    console.log(`Welcome runner, your race time is 9:30am and your race number is ${raceNumber}. Good luck!`);
} else if (runnerAge >= 18 && registeredEarly === !true) {
    console.log(`Welcome runner,your race time is 11:00am and your race number is ${raceNumber}. Good luck!`);
} else if (runnerAge < 18) {
    console.log(`Welcome runner, your race time is 12:30pm and your race number is ${raceNumber}. Good luck!`);
} else {
    console.log('Welcome runner, please see the registration desk');
}