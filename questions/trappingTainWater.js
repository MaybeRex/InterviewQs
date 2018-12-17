/* eslint prefer-destructuring: 0 */
/*
Given n non-negative integers representing an elevation map where the width of each bar is 1,
compute how much water it is able to trap after raining.

  Input: [0,1,0,2,1,0,1,3,2,1,2,1]
  Output: 6
 */

const maintainMax = (list) => {
  const ansList = [];
  ansList[0] = list[0];
  for (let i = 1; i < list.length; i += 1) {
    ansList[i] = Math.max(list[i], ansList[i - 1]);
  }

  return ansList.slice();
};

const trap = (heights) => {
  if (!heights || !heights.length) {
    return 0;
  }

  let ans = 0;
  const leftCache = maintainMax(heights);
  const rightCache = maintainMax(heights.reverse()).reverse();

  for (let i = 0; i < heights.length; i += 1) {
    ans += Math.min(leftCache[i], rightCache[i]) - heights[i];
  }

  return ans;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
// console.log(trap([5, 4, 3, 4, 5]) === 4);
// console.log(trap([0, 1, 0, 2]) === 1);
// console.log(trap([2, 0, 2]) === 2);
