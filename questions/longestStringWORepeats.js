const lengthOfLongestSubstring = (s) => {
  let max = 0;
  let str = '';
  let i = 0;
  const cache = {};

  while (i < s.length) {
    const char = s[i];

    // found a long substr
    if (cache[char] && str.length > max) {
      max = str.length;
    }

    if (cache[char]) {
      const start = str.indexOf(char);
      str = str.substring(start + 1);
    }

    if (i >= s.length) {
      break;
    }

    str += char;
    cache[char] = i + 1;
    i += 1;
  }

  // captures last one
  if (str.length > max) {
    max = str.length;
  }

  return max;
};

console.log(lengthOfLongestSubstring('nfpdmpi'), 5);
console.log(lengthOfLongestSubstring('jlygy'), 4);
console.log(lengthOfLongestSubstring('abcb'), 3);
console.log(lengthOfLongestSubstring('dvdf'), 3);
console.log(lengthOfLongestSubstring('abcabcbb'), 3);
console.log(lengthOfLongestSubstring('bbtablud'), 6);
console.log(lengthOfLongestSubstring('tmmzuxt'), 5);
