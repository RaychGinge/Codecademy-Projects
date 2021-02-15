// write a fucntion, convertToBaby(), that takes in an array as an argument and, using a loop, returns a new array with each string in the arry prepended with 'baby'
// not allowed to use .map()

function convertToBaby(array) {
    let babyAnimals = [];
    for (let i = 0; i < array.length; i++) {
        // console.log('baby ' + array[i]);
        babyAnimals.push('baby' + array[i]);
    }
    return babyAnimals;
}

const animals = ['pig', 'cow', 'peacock'];

console.log(convertToBaby(animals));