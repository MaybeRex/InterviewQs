/*
  Given a string, find the length of the longest substring without repeating characters.

  Examples:

  Given "abcabcbb", the answer is "abc", which the length is 3.
  Given "bbbbb", the answer is "b", with the length of 1.
  Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */


function lengthOfLongestSubStr(s) {
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
      i++;
    }
  }

  if (str.length > max) {
    max = str.length;
  }

  return max;
}

console.log(lengthOfLongestSubStr('abcabcbb'));
