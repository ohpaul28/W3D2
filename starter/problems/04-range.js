/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:


***********************************************************************/
let range = (start, end) => {
  let arr = [];

  if (end < start) return arr;
  
  if (start < end) arr.push(start); // base case

  return arr.concat(range(start + 1, end)) // recursive step

}

console.log(range(1, 5)); // [1, 2, 3, 4]
console.log(range(3, 4)); // [3]
console.log(range(7, 6)); // []
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}
