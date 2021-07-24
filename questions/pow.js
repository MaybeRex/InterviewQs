/*
Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

Input: x = 2.00000, n = 10
Output: 1024.00000

Input: x = 2.10000, n = 3
Output: 9.26100

Input: x = 2.00000, n = -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25
*/

const myPow = (num, exponent) => {
  let ans = 1;

  for (let i = 0; i < Math.abs(exponent); i += 1) {
    ans *= num;
  }

  if (exponent < 0) {
    return 1 / ans;
  }

  return ans;
};

console.log(myPow(2, 10), 1024);
console.log(myPow(2, 1.3), 9.261);
console.log(myPow(2, -2), 0.25);
