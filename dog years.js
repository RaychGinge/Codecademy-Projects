// My current age in human years
const myAge = 29;

// a variable for early years, the value will change
let earlyYears = 2;
// let laterYears equal myAge minus 2
let laterYears = myAge - 2

earlyYears *= 10.5;

//multiply laterYears by 4 to work out the number of dog years accounted for by my later years
laterYears *= 4;

// combines earlyYears and laterYears variable to create a new value
let myAgeInDogYears = earlyYears + laterYears;

console.log(earlyYears);
console.log(laterYears);

console.log(myAgeInDogYears);

//defines my name in lowercase as a variable
let myName = 'Rachel'.toLowerCase();

// print the values of each variable as part of the string.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)