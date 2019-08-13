/*
  Implement an algorithm to determine if a string has all unique characters 
  What if you can not use additional data structures
*/

// using extra data structures, use a Set
const checkForDuplicated = (str) => {
  const uniqueSet = new Set(str);
  return Array.from(uniqueSet).length === str.length;
}

// using no extra data structures
// this sucks cuz essentially I can use strings?
const checkForDuplicatedPlain = (str) => {
  let newStr = '';

  for(let i = 0; i < str.length; i += 1) {
    const char = str[i];
    if(newStr.includes(char)) {
      return false;
    }

    newStr += char;
  }

  return true;
}

console.log(checkForDuplicated('hello'), false);
console.log(checkForDuplicated('abc'), true);

console.log(checkForDuplicatedPlain('hello'), false);
console.log(checkForDuplicatedPlain('abc'), true);
