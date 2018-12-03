/*
Given a set of candidate numbers (candidates) (without duplicates) and a target number (target),
find all unique combinations in candidates where the candidate numbers sums to target.

The same repeated number may be chosen from candidates unlimited number of times.

Note:

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
Example 1:

Input: candidates = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]
Example 2:

Input: candidates = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
*/


const backtrack = (nums, target, current, start, total) => {
  if (target === 0) {
    return total.push(current.slice());
  }

  for (let i = start; i < nums.length; i += 1) {
    const value = nums[i];
    const remainder = target - value;
    if (target < value) {
      break;
    }

    current.push(value);
    backtrack(nums, remainder, current, i, total);
    current.pop();
  }

  return false;
};

const combinationSum = (candidates, target) => {
  if (!candidates.length === 0) {
    return [];
  }

  candidates.sort((a, b) => (a - b));
  const ans = [];

  backtrack(candidates, target, [], 0, ans);

  return ans;
};

console.log(combinationSum([2, 3, 6, 7], 7));
console.log(combinationSum([2, 3, 5], 8));
