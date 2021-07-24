/*
Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.

An interleaving of two strings s and t is a configuration where they are divided into non-empty substrings such that:

s = s1 + s2 + ... + sn
t = t1 + t2 + ... + tm
|n - m| <= 1
The interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 + t3 + s3 + ...
Note: a + b is the concatenation of strings a and b.

Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
Output: true

Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
Output: false

Input: s1 = "", s2 = "", s3 = ""
Output: true
*/

const getInterLeave = (first, firstIndex, second, secondIndex, ans, total) => {
  if (ans === total && firstIndex === first.length && secondIndex === second.length) {
    return true;
  }

  let isInter = false;
  if (firstIndex < first.length) {
    isInter = isInter || getInterLeave(first, firstIndex + 1, second, secondIndex, ans + first[firstIndex], total);
  }
  if (secondIndex < second.length) {
    isInter = isInter || getInterLeave(first, firstIndex, second, secondIndex + 1, ans + second[secondIndex], total);
  }

  return isInter;
};

const isInterleave = (first, second, total) => {
  if (first.length + second.length !== total.length) {
    return false;
  }

  return getInterLeave(first, 0, second, 0, '', total);
};

console.log(isInterleave('aabcc', 'dbbca', 'aadbbcbcac'));
console.log(isInterleave('aabcc', 'dbbca', 'aadbbbaccc'));
console.log(isInterleave('', '', 'a'));
console.log(isInterleave('b', 'a', 'a'));
