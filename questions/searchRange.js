const searchRange = (list, target) => {
  if (list.length === 0) {
    return [-1, -1];
  }

  if (!list.includes(target)) {
    return [-1, -1];
  }

  const ans = [];

  for (let i = 0; i < list.length; i += 1) {
    const num = list[i];

    if (num < target) {
      continue;
    }

    if (num > target) {
      break;
    }

    ans.push(i);
  }

  if (ans.length === 1) {
    // stupid
    return [ans[0], ans[0]];
  }

  return [ans[0], ans[ans.length - 1]];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
