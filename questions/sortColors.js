/*
Given an array nums with n objects colored red, white, or blue, sort them in-place
so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

Input: nums = [2,0,1]
Output: [0,1,2]

Input: nums = [0]
Output: [0]

Input: nums = [1]
Output: [1]
*/

const swap = (first, second, arr) => {
  const temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
};

// the strat is to have 2 pointers, one for 0s and one for 2s,
// move the 0s to the left, and the 2s to the right. idk ezpz
const sortColors = (nums) => {
  let zeroP = 0;
  let twoP = nums.length - 1;
  let current = 0;

  while (current <= twoP) {
    if (nums[current] === 0) {
      swap(current, zeroP, nums);
      current += 1;
      zeroP += 1;
      continue;
    }

    if (nums[current] === 2) {
      swap(current, twoP, nums);
      twoP -= 1;
      continue;
    }

    current += 1;
  }


  return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
console.log(sortColors([2, 0, 1]));
console.log(sortColors([0,1,2,0,0,2,2,1]));
console.log(sortColors([1]));
console.log(sortColors([1, 2, 1]));
console.log(sortColors([2, 2, 1]));
console.log(sortColors([2, 0, 2]));
console.log(sortColors([0,0,1,0,1,1]));
console.log(sortColors([2, 1, 2, 0, 1, 1, 1, 1]));
