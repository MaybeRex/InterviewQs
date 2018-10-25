const removeElement = (list, val) => {
  if (!list.length) {
    return 0;
  }

  let replaceIndex = 0; // eslint-ignore-line

  for (let i = 0; i < list.length; i += 1) {
    if (val === list[i]) {
      continue;
    }

    list[replaceIndex] = list[i];
    replaceIndex += 1;
  }

  return replaceIndex;
};

console.log(removeElement([3, 2, 2, 3], 3));
