/*
https://www.codewars.com/kata/53dbd5315a3c69eed20002dd
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
Example
filter_list([1,2,'a','b']) == [1,2]
*/

//My solution
function filter_list(l) {
  function isNumber(el, ind, arr) {
    return (typeof el === 'number');
  }
  return l.filter(isNumber);
}

let answer = filter_list([1,2,'a','b']);
console.log(answer);