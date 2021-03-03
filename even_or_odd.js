/*
https://www.codewars.com/kata/53da3dbb4a5168369a0000fe
Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

//My solution
function even_or_odd(number) {
  if (number % 2 === 0){
    return "Even";
  } else {
    return "Odd";
  }
}


let answer = even_or_odd(4);
console.log(answer);