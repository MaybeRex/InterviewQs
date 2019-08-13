/*
  Write a method to decide if two strings are anagrams or not
*/

const createMap = (str) => {
  const cache = {};
  for(let i = 0; i < str.length; i += 1) {
    const char = str[i];
    if(cache[char]) {
      cache[char] += 1;
      continue;
    }

    cache[char] = 1;
  }

  return cache;
}

const isAnagram = (first, second) => {
  const firstObj = createMap(first);
  const secondObj = createMap(second);

  for(key in firstObj) {
    if(firstObj[key] !== secondObj[key]) {
      return false;
    }
  }

  return Object.entries(firstObj).length === Object.entries(secondObj).length;
}

console.log(isAnagram('hello', 'llheo'), true);
console.log(isAnagram('hello', 'llhheo'), false);
console.log(isAnagram('hello', 'lhheo'), false);
console.log(isAnagram('hello', 'hahawhat'), false);
