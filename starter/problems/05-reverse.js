/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

***********************************************************************/
let reverse = (string, newArr = []) => {
  // let arr = string.split("");
  // debugger;
  if (!string.length) return newArr.join(""); // base case
    // debugger;
  /* } else {
    newArr.push(arr.pop())
  */
  // debugger;
  newArr.push(string.slice(string.length - 1))

  return reverse(string.slice(0, string.length - 1), newArr) // recursive step

}

// let reverse = (string, newArr = []) => {

//   let arr = string.split('');

//   if (!string.length) return newArr.join('')

//   newArr.push(arr.slice(arr.length - 1))

//   return reverse(arr.slice(0, arr.length - 1), newArr)

// }



console.log(reverse("house")); // "esuoh"
console.log(reverse("dog")); // "god"
console.log(reverse("atom")); // "mota"
console.log(reverse("q")); // "q"
console.log(reverse("id")); // "di"
console.log(reverse("")); // ""

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
