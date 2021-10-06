/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/
//Barry's solution
// const flatten = arr => {

//   for (i = 0; i < arr.length; i++) {
//     let element = arr[i];

//     if (Arr.isArray(element)) {
//       newArr.push(...flatten(element));
//     }else {
//       newArr.push(element);
//     }
//   }
//   return newArr;
// };
  
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
