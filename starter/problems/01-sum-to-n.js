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
      if (num < 0) return null;
      else if (num > 0) {
        debugger;
        return num + sumToN(num - 1);
      }
      else {
        return num;
      }
    }

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
