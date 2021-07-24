/*
A message containing letters from A-Z can be encoded into numbers using the following mapping:

Input: s = "12"
Output: 2
Explanation: "12" could be decoded as "AB" (1 2) or "L" (12).

Input: s = "226"
Output: 3
Explanation: "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).

Input: s = "0"
Output: 0
Explanation: There is no character that is mapped to a number starting with 0.
The only valid mappings with 0 are 'J' -> "10" and 'T' -> "20", neither of which start with 0.
Hence, there are no valid ways to decode this since all digits need to be mapped.

Input: s = "206"
Output: 0
Explanation: "06" cannot be mapped to "F" because of the leading zero ("6" is different from "06").
*/

const generateCombos = (num, ans) => {
  if (num < 0) {
    return [...ans];
  }

  if (!ans.length) {
    ans.push([num]);
    return [...ans];
  }

  const newAns = [];

  for (let i = 0; i < ans.length; i += 1) {
    const entry = ans[i];

    const last = entry.shift();
    newAns.push([num, last, ...entry]);

    if (last.length > 1) {
      continue;
    }

    newAns.push([num + last, ...entry]);
  }

  return [...newAns];
};

const numDecodings = (numStr) => {
  const nums = numStr.split('').reverse();
  let ans = [];

  for (let i = 0; i < nums.length; i += 1) {
    ans = generateCombos(nums[i], ans);
  }

  for (let i = 0; i < ans.length; i += 1) {
    const ansNum = ans[i];
    const ansCopy = [];

    for (let j = 0; j < ansNum.length; j += 1) {
      if (ansNum[j] === '0' || ansNum[j] === '00') {
        continue;
      }

      if (ansNum[j].length === 2 && ansNum[j][0] === '0') {
        ansCopy.push(ansNum[j][1]);
        continue;
      }
      ansCopy.push(ansNum[j]);
    }

    ans[i] = [...ansCopy];
  }

  const map = {};

  for (let i = 0; i < ans.length; i += 1) {
    if (!ans[i].length) {
      continue;
    }

    map[ans[i].join(',')] = true;
  }

  return Object.keys(map).length;
};

console.log(numDecodings('0'));
console.log(numDecodings('12'));
console.log(numDecodings('226'));
console.log(numDecodings('206'));
console.log(numDecodings('00006'));
