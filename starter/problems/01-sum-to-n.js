/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

***********************************************************************/

// let sumToN = num => {
  //   if (num < 0) return null;
  //   else if {
    //     sum = num + (num + 1)
    //     num === 0;
    // }
    // return sumToN();
    // }

    function sumToN(num) {
      if (num < 0) return null; // base case
      else if (num > 0) { // recursive case
        debugger;
        return num + sumToN(num - 1); // recursive step
      }
      else {
        return num;
      }
    }

// 1 => 1
// 2 => 2 + sumToN(1) => 2 + 1 => 3
// 3 => 3 + sumToN(2) => 3 + 3 => 6
// 4 => 4 + sumToN(3) => 4 + 6 => 10
// 5 => 5 + sumTon(4) => 5 + 10 => 15

    console.log(sumToN(5)) // returns 15
    console.log(sumToN(1))  // returns 1
    console.log(sumToN(9))  // returns 45
    console.log(sumToN(-8))  // returns null
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}
