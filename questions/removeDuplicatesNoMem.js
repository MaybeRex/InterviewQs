const removeDuplicates = (list) => {
  if (!list.length) {
    return 0;
  }
  let current = list[0];
  let fillIndex = 1;
  for (let i = 1; i < list.length; i += 1) {
    if (list[i] === current) {
      continue;
    }

    list[fillIndex] = list[i];
    current = list[i];
    fillIndex += 1;
  }

  return fillIndex;
};

console.log(removeDuplicates([1, 1, 2, 2]));
