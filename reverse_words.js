/*
https://www.codewars.com/kata/5259b20d6021e9e14c0010d4
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

//My solution
function reverseWords(str){
    var listOfWords = [];
    for (var i = 0; i < str.length; i++){
        listOfWords.push(str[i]);
    }
    var wordsReversed = listOfWords.reverse().join("").toString();

    var finalList = wordsReversed.split(" ");
    return finalList.reverse().join(" ").toString();
   
  }

  let answer = reverseWords("This is an example!");
  console.log(answer);