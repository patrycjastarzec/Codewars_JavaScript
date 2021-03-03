/*
https://www.codewars.com/kata/5467e4d82edf8bbf40000155
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
Examples:
Input: 42145 Output: 54421
*/

//My solution
function descendingOrder(n){
  return parseInt(n.toString().split('').sort().reverse().join(''));
}

let answer = descendingOrder(42145);
console.log(answer);