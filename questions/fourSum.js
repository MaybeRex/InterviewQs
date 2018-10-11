const MergeSort = require('./mergeSort');

const fourSum = (list, target = 0) => {
  if (list.length < 4) {
    return [];
  }

  const sortedList = MergeSort.sort(list);
  const ans = [];

  // n * three sum
  for (let outerIndex = 0; outerIndex < sortedList.length - 3; outerIndex += 1) {
    const outer = sortedList[outerIndex];

    for (let i = outerIndex + 1; i < sortedList.length - 2; i += 1) {
      const main = sortedList[i];

      let leftIndex = i + 1;
      let rightIndex = sortedList.length - 1;

      while (leftIndex < rightIndex) {
        const left = sortedList[leftIndex];
        const right = sortedList[rightIndex];

        const sum = main + left + right + outer;

        if (sum === target) {
          ans.push([main, left, right, outer]);

          leftIndex += 1;
          rightIndex -= 1;
          continue;
        }

        if (sum < target) {
          leftIndex += 1;
          continue;
        }

        rightIndex -= 1;
      }
    }
  }

  const sortedArrays = ans.map(arr => MergeSort.sort(arr));

  const sortedCache = {};

  return sortedArrays.filter((arr) => {
    const arrStr = arr.join('');

    if (!sortedCache[arrStr]) {
      sortedCache[arrStr] = true;
      return true;
    }

    return false;
  });
};

console.log(fourSum([1, 0, -1, 0, -2, 2]));
