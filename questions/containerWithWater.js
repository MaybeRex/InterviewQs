const merge = (left, right) => {
  const ans = [];
  while (left.length && right.length) {
    if (left[0].value < right[0].value) {
      ans.push(right.shift());
      continue;
    }
    ans.push(left.shift());
  }

  ans.push(...left);
  ans.push(...right);

  return ans;
};

const reverseSort = (list) => {
  if (list.length === 1) {
    return list;
  }

  const middle = Math.floor(list.length / 2);
  const left = list.slice(0, middle);
  const right = list.slice(middle);

  return merge(reverseSort(left), reverseSort(right));
};

// TODO divide and conquer
const findMaxArea = (reversedList) => {
  let max = -Infinity;

  for (let i = 0; i < reversedList.length; i += 1) {
    for (let j = (i + 1); j < reversedList.length; j += 1) {
      const first = reversedList[i];
      const second = reversedList[j];
      const multiplier = first.value > second.value ? second.value : first.value;

      const product = Math.abs(first.index - second.index) * multiplier;

      if (max < product) {
        max = product;
      }
    }
  }

  return max;
};

const maxArea = (list) => {
  const indexedList = list.map((value, index) => ({
    value,
    index,
  }));

  const sortedList = reverseSort(indexedList);
  return findMaxArea(sortedList);
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([0, 0, 0, 3, 0, 4, 0, 0, 0]));
