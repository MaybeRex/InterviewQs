/*
Given an array of non-negative integers nums, you are initially
positioned at the first index of the array.
Each element in the array represents your maximum jump length at that position.
Determine if you are able to reach the last index.

Input: nums = [2,3,1,1,4]
Output: true

Input: nums = [3,2,1,0,4]
Output: false

*/

// this was super fast but it only solved like 74/75 inputs
// const canJump = (nums) => {
//   if (nums.length <= 1) {
//     return true;
//   }

//   let i = 0;
//   while (i < nums.length) {
//     const current = nums[i];

//     if (current === 0) {
//       return false;
//     }

//     if (current + i >= nums.length - 1) {
//       return true;
//     }

//     const possibleJumps = nums.slice(i + 1, i + nums[i] + 1);

//     let maxJump = possibleJumps[0];
//     let maxJumpIndex = 0;
//     for (let j = 0; j < possibleJumps.length; j += 1) {
//       if (possibleJumps[j] >= maxJump) {
//         maxJump = possibleJumps[j];
//         maxJumpIndex = j;
//       }
//     }

//     i += maxJumpIndex + 1;
//   }

//   return true;
// };

// backtrack
const solve = (nums, step, visited) => {
  if (step >= nums.length - 1) {
    return true;
  }

  if (visited[step]) {
    return false;
  }

  const num = nums[step];
  visited[step] = true;

  if (num === 0) {
    return false;
  }

  for (let i = num; i >= 1; i -= 1) {
    if (!solve(nums, step + i, visited)) {
      continue;
    }

    return true;
  }

  return false;
};

const canJump = (nums) => {
  const visited = {};
  const hasSolution = solve(nums, 0, visited);
  return hasSolution;
};

console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));
console.log(canJump([0]));
console.log(canJump([2, 0, 0]));
console.log(canJump([2, 5, 0, 0]));
console.log(canJump([5, 9, 3, 2, 1, 0, 2, 3, 3, 1, 0, 0]));
console.log(canJump([4, 2, 0, 0, 1, 1, 4, 4, 4, 0, 4, 0]));
// eslint-disable-next-line max-len
console.log(canJump([2, 0, 6, 9, 8, 4, 5, 0, 8, 9, 1, 2, 9, 6, 8, 8, 0, 6, 3, 1, 2, 2, 1, 2, 6, 5, 3, 1, 2, 2, 6, 4, 2, 4, 3, 0, 0, 0, 3, 8, 2, 4, 0, 1, 2, 0, 1, 4, 6, 5, 8, 0, 7, 9, 3, 4, 6, 6, 5, 8, 9, 3, 4, 3, 7, 0, 4, 9, 0, 9, 8, 4, 3, 0, 7, 7, 1, 9, 1, 9, 4, 9, 0, 1, 9, 5, 7, 7, 1, 5, 8, 2, 8, 2, 6, 8, 2, 2, 7, 5, 1, 7, 9, 6]));
