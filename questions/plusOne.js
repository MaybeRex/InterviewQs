/*
Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.
The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.
You may assume the integer does not contain any leading zero, except the number 0 itself.

Input: digits = [1,2,3]
Output: [1,2,4]

Input: digits = [4,3,2,1]
Output: [4,3,2,2]

Input: digits = [0]
Output: [1]
*/

const plusOne = (digits) => {
  let resolvedCarryOver = true;
  for (let i = digits.length - 1; i >= 0; i -= 1) {
    if (digits[i] !== 9) {
      digits[i] += 1;
      break;
    }

    if (i === 0) {
      resolvedCarryOver = false;
    }

    digits[i] = 0;
  }

  if (!resolvedCarryOver) {
    digits.unshift(1);
  }

  return digits;
};

console.log(plusOne([1, 2, 3]));
console.log(plusOne([1, 2, 9]));
console.log(plusOne([9, 9, 9]));
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
