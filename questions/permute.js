const permute = (list) => {
  if (!list.length) {
    return [];
  }

  if (list.length === 1) {
    return [list];
  }

  const results = [];

  for (let i = 0; i < list.length; i += 1) {
    const current = list[i];
    const remaining = [...list.slice(0, i), ...list.slice(i + 1)];

    const innerPermuations = permute(remaining);

    for (let j = 0; j < innerPermuations.length; j += 1) {
      const tail = innerPermuations[j];
      results.push([current, ...tail]);
    }
  }

  return results;
};

console.log(permute([1, 2, 3]));
console.log(permute([1]));
