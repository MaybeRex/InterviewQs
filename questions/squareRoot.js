/*
Given a non-negative integer x, compute and return the square root of x.
Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

Input: x = 4
Output: 2

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
*/

const mySqrt = (x) => {
  const maxIntRoot = 94906265;

  for (let i = 1; i <= maxIntRoot; i += 1) {
    const upper = i * i;
    const lower = (i - 1) * (i - 1);

    if (x >= lower && x < upper) {
      return i - 1;
    }
  }

  return -1;
};

console.log(mySqrt(0));
console.log(mySqrt(1));
console.log(mySqrt(8));
console.log(mySqrt(4));
console.log(mySqrt(9));
console.log(mySqrt(15));
