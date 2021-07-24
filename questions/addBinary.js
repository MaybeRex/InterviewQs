/*
Given two binary strings a and b, return their sum as a binary string.

Input: a = "11", b = "1"
Output: "100"

Input: a = "1010", b = "1011"
Output: "10101"
*/

const addBinary = (first, second) => {
  // make adding these mfs slightly easier
  const diff = Math.abs(first.length - second.length);
  const addition = new Array(diff).fill(0).join('');
  if (first.length > second.length) {
    second = `${addition}${second}`;
  }

  if (second.length > first.length) {
    first = `${addition}${first}`;
  }

  let carryOverResolved = true;
  let carryOver = 0;
  let ans = '';
  // theyre the same length now
  for (let i = first.length - 1; i >= 0; i -= 1) {
    const tempSum = Number(first[i]) + Number(second[i]) + carryOver;

    if (tempSum <= 1) {
      carryOverResolved = true;
      carryOver = 0;
      ans = `${tempSum}${ans}`;
      continue;
    }

    let standingNum = 0;

    if (tempSum === 3) {
      standingNum = 1;
    }

    carryOver = 1;
    carryOverResolved = false;
    ans = `${standingNum}${ans}`;
  }

  if (!carryOverResolved) {
    ans = `1${ans}`;
  }

  return ans;
};

console.log(addBinary('11', '1'), 100);
console.log(addBinary('1010', '1011'), 10101);
console.log(addBinary('1111', '1111'), 11110);
