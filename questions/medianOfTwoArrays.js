const merge = (firstSortedList, secondSortedList) => {
  const mergedList = [];
  while (firstSortedList.length && secondSortedList.length) {
    if (firstSortedList[0] >= secondSortedList[0]) {
      mergedList.push(secondSortedList.shift());
      continue;
    }
    mergedList.push(firstSortedList.shift());
  }

  mergedList.push(...firstSortedList);
  mergedList.push(...secondSortedList);

  return mergedList;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (firstSortedList, secondSortedList) => {
  const mergedArray = merge(firstSortedList, secondSortedList);
  const { length } = mergedArray;
  const middle = length / 2;
  let type = 'even';
  if (length % 2 !== 0) {
    type = 'odd';
  }

  if (length === 1) {
    return mergedArray[0];
  }

  switch (type) {
    case 'even': {
      return (
        mergedArray.slice(middle - 1, middle)[0]
        + mergedArray.slice(middle, middle + 1)[0]
      ) / 2;
    }
    default: {
      return mergedArray[Math.floor(middle)];
    }
  }
};

console.log(findMedianSortedArrays([2], [1, 3]), 2);
console.log(findMedianSortedArrays([], [1, 2, 3]), 2);
console.log(findMedianSortedArrays([], [1, 2, 3, 4, 5]), 3);
