/**
 * @param {string} s
 * @return {number}
 */
// const lengthOfLongestSubstring = (str) => {
//   let tempCache = new Map();
//   const letterCache = {};
//   let removeCount = 0;
//   str.split('').forEach((letter, i) => {
//     if (!tempCache.has(letter)) {
//       tempCache.set(letter, i);
//       return;
//     }
//
//     const foundIndex = tempCache.get(letter) + 1 - removeCount;
//     const indexDiff = i - foundIndex;
//
//     if (indexDiff >= 1) {
//       const entries = Array.from(tempCache.entries());
//       const beginning = new Map(entries.slice(0, foundIndex));
//
//       // simple word
//       if (beginning.size + 1 > (str.length / 2)) {
//         const word = Array.from(tempCache.keys()).join('');
//         letterCache[word] = word;
//         removeCount += word.length;
//         tempCache = new Map();
//         tempCache.set(letter, i);
//         return;
//       }
//
//       tempCache = new Map([...entries.slice(foundIndex), [letter, i]]);
//       const word = Array.from(beginning.keys()).join('');
//       letterCache[word] = word;
//       return;
//     }
//
//     const word = Array.from(tempCache.keys()).join('');
//     letterCache[word] = word;
//     removeCount += word.length;
//     tempCache = new Map();
//     tempCache.set(letter, i);
//   });
//
//   const lastWord = Array.from(tempCache.keys()).join('');
//   letterCache[lastWord] = lastWord;
//
//   console.log(letterCache);
//
//   return Object.values(letterCache).reduce((accum, word) => {
//     if (word.length > accum.length) {
//       return word;
//     }
//
//     return accum;
//   }, '').length || str.length;
// };

const lengthOfLongestSubStr = (s) => {
  let max = 0;
  let str = '';
  let i = 0;
  const cache = [];

  while (i < s.length) {
    const char = s[i];
    if (cache[char]) {
      if (str.length > max) {
        max = str.length;
      }

      const start = str.indexOf(char);
      str = str.substring(start + 1);
    }

    if (i < s.length) {
      str += char;
      cache[char] = i + 1;
      i += 1;
    }
  }

  if (str.length > max) {
    max = str.length;
  }

  return max;
};

console.log(lengthOfLongestSubStr('nfpdmpi'));
console.log(lengthOfLongestSubStr('jlygy'));
console.log(lengthOfLongestSubStr('abcb'));
console.log(lengthOfLongestSubStr('dvdf'));
console.log(lengthOfLongestSubStr('abcabcbb'));
console.log(lengthOfLongestSubStr('bbtablud'));
