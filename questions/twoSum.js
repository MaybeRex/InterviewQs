/*
  Given an array of integers, return indices of the two numbers such that they add up to a specific target.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.

  Example:
    Given nums = [2, 7, 11, 15], target = 9,
    Because nums[0] + nums[1] = 2 + 7 = 9,
    return [0, 1].
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
**/
function twoSums(nums, target) {
  const cache = {};
  const answer = [];
  for(let i = 0; i < nums.length; i++) {
    if(cache[`${target - nums[i]}`] !== undefined) {
      answer.push(i);
    }

    cache[nums[i].toString()] = nums[i];
  }

  for(let i = 0; i < nums.length; i++) {
    if(i == answer[0]) {
      continue;
    }

    if(nums[i] + nums[answer[0]] == target) {
      answer.push(i);
      return answer;
    }
  }
}

console.log(twoSums([0,4,3,0], 0));
