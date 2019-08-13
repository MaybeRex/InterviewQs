/*
  Write a method to replace all spaces in a string with ‘%20’
*/

const relpaceEmptySpaces = (str) => str.replace(/\s/g, '%20');

console.log(relpaceEmptySpaces('hello world'), 'hello%20world');
console.log(relpaceEmptySpaces(' yuh yuh yuh '), '%20yuh%20yuh%20yuh%20');
