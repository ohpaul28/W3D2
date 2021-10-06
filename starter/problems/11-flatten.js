/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

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

        // take elements out of nested arrays to
        // display them into the main-level array.

let flatten = (array, count = 0) => {

  if (array === []) return [];

debugger;
  /*figure out a way to identify how many layers of arrays exist*/
  for (let i = 0; i < array.length; i++) {
    let ele = array[i];
    debugger;
    if (Array.isArray(ele)) {
      count++;
      debugger;
      flatten(ele);
    }
  }
  return array.flat(count);
}


// console.log(flatten([])); // []
// console.log(flatten([1, 2])); // [1, 2]
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
