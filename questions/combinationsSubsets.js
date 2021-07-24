/*
Given an integer array nums of unique elements, return all possible subsets (the power set).
The solution set must not contain duplicate subsets. Return the solution in any order.

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

Input: nums = [0]
Output: [[],[0]]
*/

const backTrackCombine = (first, current, ans, nums, k) => {
  if (current.length === k) {
    ans.push(current);
  }

  for (let i = first; i < nums.length; i += 1) {
    current.push(nums[i]);
    backTrackCombine(i + 1, [...current], ans, nums, k);
    current.pop();
  }
};

const subsets = (nums) => {
  const ans = [];

  for (let i = 0; i <= nums.length; i += 1) {
    backTrackCombine(0, [], ans, nums, i);
  }

  return ans;
};

console.log(subsets([1, 2, 3]));
