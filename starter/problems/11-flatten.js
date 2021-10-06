/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

***********************************************************************/
//Barry's solution
const flatten = arr => {
  let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];

        if (Array.isArray(element)) {
            newArr.push(...flatten(element));
          }else {
              newArr.push(element);
            }
          }
          return newArr;
        };

        // take elements out of nested arrays to
        // display them into the main-level array.

// let flatten = array => {
  
// if (array === []) return [];

// Array.isArray()

// /*figure out a way to identify how many layers of arrays exist*/
//   return flatten(array.flat());
// }


console.log(flatten([])); // []
console.log(flatten([1, 2])); // [1, 2]
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
