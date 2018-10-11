const MergeSort = require('./mergeSort');

const threeSum = (list, target = 0) => {
  if (list.length < 3) {
    return [];
  }

  // case w/ like 1000 0's was taking forever and giving me a bad runtime score >:(
  const zeroRepeat = new Set(list);
  if (list[0] === 0 && Array.from(zeroRepeat).length === 1) {
    return [[0, 0, 0]];
  }

  const sortedList = MergeSort.sort(list);
  const ansCache = {};
  const ans = [];

  for (let i = 0; i < sortedList.length; i += 1) {
    const main = sortedList[i];
    let leftIndex = i + 1;
    let rightIndex = sortedList.length - 1;

    while (leftIndex < rightIndex) {
      const leftValue = sortedList[leftIndex];
      const rightValue = sortedList[rightIndex];
      const sum = leftValue + rightValue + main;

      if (sum === target && !ansCache[`${main}${leftValue}${rightValue}`]) {
        ans.push([main, leftValue, rightValue]);
        leftIndex += 1;
        rightIndex -= 1;
        ansCache[`${main}${leftValue}${rightValue}`] = true;
        continue;
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

console.log(threeSum([3, 0, -2, -1, 1, 2]));
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 0, 0, 0]));
