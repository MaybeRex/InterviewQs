/*
  The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:
  (you may want to display this pattern in a fixed font for better legibility)

  P   A   H   N
  A P L S I I G
  Y   I   R
  And then read line by line: "PAHNAPLSIIGYIR"

  Write the code that will take a string and make this conversion given a number of rows:

  string convert(string s, int numRows);
  Example 1:

  Input: s = "PAYPALISHIRING", numRows = 3
  Output: "PAHNAPLSIIGYIR"
  Example 2:

  Input: s = "PAYPALISHIRING", numRows = 4
  Output: "PINALSIGYAHRPI"
  Explanation:

  P     I    N
  A   L S  I G
  Y A   H R
  P     I
*/

const convert = (str, rows) => {
  if (rows === 1) {
    return str;
  }

  let mainIndex = 0;
  let isEven = true;
  const ans = [];

  for (let i = 0; i < rows; i += 1) {
    ans[i] = [];
  }

  while (mainIndex < str.length) {
    if (isEven) {
      for (let firstInner = 0; firstInner < rows; firstInner += 1) {
        if (!str[mainIndex]) {
          break;
        }
        ans[firstInner].push(str[mainIndex]);
        mainIndex += 1;
      }

      isEven = false;
      continue;
    }

    if (rows < 3) {
      isEven = true;
      continue;
    }

    for (let secondInner = rows - 2; secondInner >= 1; secondInner -= 1) {
      if (!str[mainIndex]) {
        break;
      }

      ans[secondInner].push(str[mainIndex]);
      mainIndex += 1;
    }

    isEven = true;
  }

  return ans.reduce((accum, next) => accum + next.join(''), '');
};

console.log(convert('A', 1) === 'A');
console.log(convert('ABC', 2) === 'ACB');
console.log(convert('AB', 2) === 'AB');
console.log(convert('AB', 1) === 'AB');
console.log(convert('ABCDEF', 4) === 'ABFCED');
console.log(convert('PAYPALISHIRING', 3) === 'PAHNAPLSIIGYIR');
console.log(convert('PAYPALISHIRING', 4) === 'PINALSIGYAHRPI');

// /**
//  * @param {string} s
//  * @param {number} numRows
//  * @return {string}
//  */
// const convert = (str, rows) => {
//   const { length } = str;
//   if (length === rows || rows === 1) {
//     return str;
//   }
//
//   const ans = [];
//   for (let i = 0; i < rows; i += 1) {
//     ans[i] = [];
//   }
//
//   const delta = rows + (rows - 2);
//   const topIndex = rows + 1;
//   let isEven = true;
//   let reverseIndex;
//
//   const target = Math.ceil(length / topIndex);
//   console.log(target, length);
//   reverseIndex = (target * (topIndex + 1)) + 1;
//
//   str.split('').forEach((letter, index) => {
//     const deltaFirst = index % delta;
//     const deltaLast = (index + rows - 1) % delta;
//     const deltaInv = reverseIndex % delta;
//     reverseIndex -= 1;
//     // first and last
//     console.log(index, deltaInv, reverseIndex);
//     if (deltaFirst === 0) {
//       isEven = true;
//       ans[0].push(letter);
//       return;
//     }
//
//     if (deltaLast === 0) {
//       isEven = false;
//       ans[rows - 1].push(letter);
//       return;
//     }
//
//     if (isEven) {
//       ans[deltaFirst].push(letter);
//       return;
//     }
//
//     // console.log(reverseIndex);
//     ans[deltaInv - 1].push(letter);
//   });
//
//   return ans.reduce((accum, next) => accum + next.join(''), '');
// };
