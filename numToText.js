/*
Create a function using recursion called numToText which takes a
string and returns a new string with all numeric numbers from the
input string converted to their corresponding text words. You can
assume that the numbers in the string are single digit nubmers.
Can you implement this function in two different ways?
One way involves creating an inner helper function (or subroutine),
the other way does not use an inner function.

Extra Credit: Have the function handle numbers of any digit size.

Ex: numToText("I have 5 dogs and 6 ponies"); // returns "I have five dogs and six ponies"

*/

var numToText = function(str) {
  // Create lookup table for numbers 0 - 9
  var numTable = {
    0 : "zero",
    1 : "one",
    2 : "two",
    3 : "three",
    4 : "four",
    5 : "five",
    6 : "six",
    7 : "seven",
    8 : "eight",
    9 : "nine"
  };
  // Create variable and assign with first character in string
  var firstChar = str.slice(0, 1);

  // Create stop condition - looped through entire string
  if (str.length === 0) {return ''}
  // If in first character in lookup table
  if (str.hasOwnProperty(firstChar)) {
    // Change value of firstChar to value in lookup table
    firstChar = numTable[firstChar];
  }
  // return first character and recursively call with new string (string - 1st character of string)
  return firstChar + numToText(str.slice(1));  
};

console.log(numToText("0 I have 5 dogs and 6 ponies"));

