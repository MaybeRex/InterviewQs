/*
Given an integer array nums, find the contiguous subarray
(containing at least one number) which has the largest sum and return its sum.

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6

Input: nums = [1]
Output: 1

Input: nums = [5,4,-1,7,8]
Output: 23
*/

const maxSubArray = (numList) => {
  let currentSum = 0;
  let max = -Infinity;

  for (let i = 0; i < numList.length; i += 1) {
    const num = numList[i];

    if (currentSum < 0) {
      currentSum = 0;
    }

    currentSum += num;

    max = max < currentSum ? currentSum : max;
  }

  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
console.log(maxSubArray([6, -44, -77, 100, -50, 10]), 100);
console.log(maxSubArray([5, 4, -1, 7, 8]), 23);
console.log(maxSubArray([1]), 1);
