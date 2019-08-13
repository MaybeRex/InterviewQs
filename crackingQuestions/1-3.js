/*
  Design an algorithm and write code to remove the duplicate characters in a string without using any additional buffer 
  NOTE: One or two additional variables are fine An extra copy of the array is not
  FOLLOW UP
  Write the test cases for this method
*/

const removeDuplicates = (str) => {
  const map = new Map();

  for(let i = 0; i < str.length; i += 1) {
    const char = str[i];

    if(map.has(char)) {
      continue;
    }

    map.set(char, char);
  }

  return Array.from(map.keys()).join('');
}

console.log(removeDuplicates('aabbcc'), 'abc');
console.log(removeDuplicates('marioooo'), 'mario');

