/*
Given a string s consists of some words separated by spaces,
return the length of the last word in the string.
If the last word does not exist, return 0.
A word is a maximal substring consisting of non-space characters only.

Input: s = "Hello World"
Output: 5

Input: s = " "
Output: 0
*/

const lengthOfLastWord = (str) => {
  str = str.trim();
  if (!str.length) {
    return 0;
  }

  return str.split(' ').pop().length;
};

console.log(lengthOfLastWord('Hello World'));
console.log(lengthOfLastWord('   '));
