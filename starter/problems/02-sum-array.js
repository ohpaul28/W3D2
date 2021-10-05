/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:


***********************************************************************/

// let sumArray = arr => {
//     if (!arr.length) return []; // base case
    
//     let ele = arr.pop(); //recursive case
//     let sum = 0 + ele;

//     return sum + sumArray(); //recursive step
// }

const sumArray = arr => {
  if (!arr.length) return 0; // base case

  return arr[0] + sumArray(arr.slice(1)); // recursive step
  
}

console.log(sumArray([1, 2, 3])); //  6
console.log(sumArray([0, 1, -3])); //  -2
console.log(sumArray([1, 2, 3, 4, 5])); // 15
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}
