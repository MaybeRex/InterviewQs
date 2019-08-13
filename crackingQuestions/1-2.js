/*
  Write code to reverse a C-Style String 
  (C-String means that “abcd” is represented as five characters, including the null character )
*/

// this one is EZ in JS lol
const reverse = (str) => str.split('').reverse().join('');

console.log(reverse('abc'), 'cba');
