// This variable contains the value of kelvin that we will convert to celsius
const kelvin = 273;

// Celsius is 273 degrees less than kelvin.
const celsius = kelvin - 273;

// farenheit variable will print the value of the equation, converted from celsius and round it down to the nearest integer
let farenheit = Math.floor(celsius * (9/5) + 32);

let newton = Math.floor(celsius * (33/100))

// prints the temperature in farenheit
console.log(`The temperature is ${farenheit} degrees Farenheit`);

console.log(`The temperature is ${newton} degrees Newton`);

console.log(`The temperature is ${celsius} degrees Celsius`);
