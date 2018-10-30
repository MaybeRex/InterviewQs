const search = (list, target) => {
  if (list.length === 0 || target.length === 0) {
    return -1;
  }

  let left = 0;
  let right = list.length - 1;

  while (left <= right) {
    if (list[left] === target) {
      return left;
    }

    if (list[right] === target) {
      return right;
    }

    left += 1;
    right -= 1;
  }

  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0) === 4);
console.log(search([4, 5, 6, 7, 0, 1, 2], 3) === -1);
console.log(search([1], 1) === 0);
