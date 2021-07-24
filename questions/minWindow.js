/* eslint-disable no-restricted-syntax */
/*
Given two strings s and t, return the minimum window in s which will contain all the characters in t.
If there is no such window in s that covers all characters in t, return the empty string "".
Note that If there is such a window, it is guaranteed that there will always be only one unique minimum window in s.

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
*/


// good attempt but double pointer is better/works lol
// const minWindow = (str, targets) => {
//   if (targets.length === str.length) {
//     targets;
//   }

//   if (str.includes(targets)) {
//     return targets;
//   }

//   const ans = [];
//   ans.push(generateTargetObj(targets));

//   const maxTargetStringLength = targets.length;
//   let targetLength = 0;
//   let ansIndex = 0;
//   for (let i = 0; i < str.length; i += 1) {
//     const letter = str[i];

//     if (targetLength < maxTargetStringLength) {
//       if (ans[ansIndex][letter] === 'x') {
//         ans[ansIndex][letter] = i;
//         targetLength += 1;

//         if (targetLength % maxTargetStringLength === 0) {
//           ans.push(generateTargetObj(targets));
//           ansIndex += 1;
//         }

//         continue;
//       }
//     }

//     if (ans[ansIndex][letter] === 'x') {
//       ans[ansIndex] = { ...ans[ansIndex - 1], [letter]: i };
//       ans.push(generateTargetObj(targets));
//       ansIndex += 1;
//     }
//   }

//   ans.pop();
//   const ansList = [];

//   for (let i = 0; i < ans.length; i += 1) {
//     const values = Object.values(ans[i]);
//     ansList.push(str.substring(Math.min(...values), Math.max(...values) + 1));
//   }

//   let min = ansList[0];

//   for (let i = 1; i < ansList.length; i += 1) {
//     if (ansList[i].length < min.length) {
//       min = ansList[i];
//     }
//   }

//   return min || '';
// };

const generateTargetObj = targets => targets.split('').reduce((accum, str) => {
  if (accum[str]) {
    accum[str].target += 1;
    return accum;
  }

  accum[str] = { count: 0, target: 1 };
  return accum;
}, {});

const checkForComplete = (map) => {
  for (const key in map) {
    if (map[key].count >= map[key].target) {
      continue;
    }

    return false;
  }

  return true;
};

// double pointer
const minWindow = (str, targetStr) => {
  const map = generateTargetObj(targetStr);
  let p0 = 0;
  let p1 = 0;
  const ans = [];

  while (p1 < str.length + 1) {
    const nextAddLetter = str[p1];
    const isValid = checkForComplete(map);

    if (!isValid) {
      if (nextAddLetter in map) {
        map[nextAddLetter].count += 1;
      }
      p1 += 1;
      continue;
    }

    while (checkForComplete(map)) {
      const nextSubLetter = str[p0];
      ans.push(str.substring(p0, p1));
      p0 += 1;

      if (nextSubLetter in map) {
        map[nextSubLetter].count -= 1;
      }
    }
  }

  let min = Infinity;
  let minStr = null;

  for (let i = 0; i < ans.length; i += 1) {
    const word = ans[i];
    if (word.length < min) {
      minStr = word;
      min = word.length;
    }
  }

  return minStr || '';
};

console.log(minWindow('ADOBECODEBANC', 'ABC'), 'BANC');
console.log(minWindow('a', 'a'), 'a');
console.log(minWindow('aa', 'aa'), 'aa');
console.log(minWindow('bba', 'ba'), 'ba');
console.log(minWindow('a', 'aa'), '');
