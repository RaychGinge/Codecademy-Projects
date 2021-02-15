/* let array = ['yes', 'no', 'maybe', 'always', 'sometimes', 'never', 'if'];
let array2 = [5, 8, 2, 9, 5, 6, 3, 1];

let newArray = []; */ 

// 1. I want to take the last element of the array, then add it to the newArray.
// 2. To do this i'll need to loop though the arrat from the end to the beginning, because I want the last element to be first.
// 3. I want to output the contents of 'newArray' when the for loop is finished.

// for (let i = arr.length -1; i >= 0; i--)


function reverseArray(arr) {
    let newArray = [];
    for (let i = arr.length -1; i >= 0; i--) {
      newArray.push(arr[i]);
    }
    return newArray;
  }
  
  let array = ['sense.','make', 'all', 'will', 'This'];
  
  console.log(reverseArray(array));