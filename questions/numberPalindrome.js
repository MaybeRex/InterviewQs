/*
  Determine whether an integer is a palindrome. Do this without extra space.
 */

function isPalindrome(num) {
  if(num < 0) {
    return false;
  }

  if(num < 10) {
    return true;
  }

  return reverseInt(num) === num;
}

// NOTE took this from the prev question
function reverseInt(num) {
  const highest = 2147483647;
  const lowest = -2147483647;
  if(num > (2e32 - 1)) {
    return 0;
  }

  let isNegative = 1;
  if(num < 0) {
    isNegative = -1;
    num = num * - 1;
  }

  numStr = num.toString();

  if(numStr.length < 2) {
    return num;
  }

  let left = 0;
  let right = numStr.length - 1;
  let answer = '';

  while(left < right) {
    answer = `${numStr[right]}${answer}${numStr[left]}`;
    left++;
    right--;
  }

  const reversedNum = Number(answer);

  return reversedNum > highest || reversedNum < lowest ? 0 : reversedNum * isNegative;
}
