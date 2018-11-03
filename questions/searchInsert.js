const searchInsert = (list, target) => {
  if (list.length < 1) {
    return 0;
  }

  for (let i = 0; i < list.length; i += 1) {
    const item = list[i];
    if (item < target) {
      continue;
    }

    if (item > target) {
      return i;
    }

    return i;
  }

  return list.length;
};

console.log(searchInsert([1, 3, 5, 6], 5) === 2);
console.log(searchInsert([1, 3, 5, 6], 2) === 1);
console.log(searchInsert([1, 3, 5, 6], 7) === 4);
console.log(searchInsert([1, 3, 5, 6], 0) === 0);
