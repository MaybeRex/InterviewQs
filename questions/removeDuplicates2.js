/*
Given a sorted array nums, remove the duplicates in-place such that duplicates appeared at most twice and return the new length.
Do not allocate extra space for another array; you must do this by modifying the input array in-place with O(1) extra memory.

Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,1,2,2,3]
Explanation: Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
It doesn't matter what you leave beyond the returned length.

Input: nums = [0,0,1,1,1,1,2,3,3]
Output: 7, nums = [0,0,1,1,2,3,3]
Explanation: Your function should return length = 7, with the first seven elements of nums being modified to 0, 0, 1, 1, 2, 3 and 3 respectively.
It doesn't matter what values are set beyond the returned length.
 */


const removeDuplicates = (nums) => {
  if (nums.length < 3) {
    return nums.length;
  }

  let firstPointer = 0;
  let secondPointer = 1;

  while (secondPointer < nums.length) {
    // if they're not equal, move them along
    if (nums[firstPointer] !== nums[secondPointer]) {
      secondPointer += 1;
      firstPointer = secondPointer - 1;
      continue;
    }

    // if they are equal and next to each other move 2nd one over by 1,
    if (firstPointer + 1 === secondPointer) {
      secondPointer += 1;
      continue;
    }

    // encountered a 3rd item, delete it
    nums.splice(secondPointer, 1);
    secondPointer -= 1;
  }

  return nums.length;
};

console.log(removeDuplicates([1,1,1,2,2,3]));
console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]));
