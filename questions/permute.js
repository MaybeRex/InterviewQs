const permute = (list) => {
  if (!list.length) {
    return [];
  }

  if (list.length === 1) {
    return [list];
  }

  const results = [];

  for (let i = 0; i < list.length; i += 1) {
    // get the current element
    const current = list[i];

    // get everything after the current one
    const remaining = [...list.slice(0, i), ...list.slice(i + 1)];

    const innerPermutations = permute(remaining);

    for (let j = 0; j < innerPermutations.length; j += 1) {
      const tail = innerPermutations[j];
      results.push([current, ...tail]);
    }
  }

  return results;
};

console.log(permute([1, 2, 3]));
// console.log(permute([1]));
