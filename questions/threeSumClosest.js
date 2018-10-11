/**
 * Given an array nums of n integers and an integer target, find three integers in nums such that
 * the sum is closest to target.
 * Return the sum of the three integers.
 * You may assume that each input would have exactly one solution.
 *
 * EX:
 * Given array nums = [-1, 2, 1, -4], and target = 1.
 * The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 */

const MergeSort = require('./mergeSort');

const threeSumClosest = (list, target) => {
  if (list.length < 4) {
    return list.reduce((accum, item) => {
      accum += item;
      return accum;
    }, 0);
  }

  const sortedList = MergeSort.sort(list);
  let smallDiff = Infinity;
  let ans = 0;

  for (let i = 0; i < sortedList.length; i += 1) {
    let leftIndex = i + 1;
    let rightIndex = sortedList.length - 1;
    const main = sortedList[i];

    while (leftIndex < rightIndex) {
      const leftValue = sortedList[leftIndex];
      const rightValue = sortedList[rightIndex];
      const sum = main + leftValue + rightValue;

      if (Math.abs(sum - target) <= smallDiff) {
        smallDiff = Math.abs(sum - target);
        ans = sum;
      }

      if (sum < target) {
        leftIndex += 1;
        continue;
      }

      rightIndex -= 1;
    }
  }

  return ans;
};

// console.log(threeSumClosest([-1, 2, 1, -4], 1));
console.log(threeSumClosest([0, 2, 1, -3], 1));
