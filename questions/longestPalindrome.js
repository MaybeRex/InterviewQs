/*
  Given a string s, find the longest palindromic substring in s.
  You may assume that the maximum length of s is 1000.

  Example:

    Input: "babad"

    Output: "bab"

    Note: "aba" is also a valid answer.

  Example:

    Input: "cbbd"

    Output: "bb"
 */

function findLongestPalindrome(str) {
  const cache = {};
  const prospects = [];
  for(let i = 0; i < str.length; i++) {
    const char = str[i];
    if(cache[char] !== undefined) {
      cache[char].count++;
      cache[char].indexes.push(i);
      continue;
    }

    cache[char] = {
      count: 1,
      indexes: [i]
    };
  }

  for(key in cache) {
    if(cache[key].count > 1) {
      // this function should probably be recursive
      checkPalindrome(cache[key].indexes, srt)
    }
  }
}

console.log(findLongestPalindrome('hellothisisaracecar'));
