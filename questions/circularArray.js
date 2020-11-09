/*
  check if an array steps thought every index and ends up in the beginning
*/
const isCircular = (list) => {
  const { length } = list;
  if (length === 1) {
    return true;
  }

  const normalized = list.map(num => num % length);

  if (normalized.includes(0)) {
    return false;
  }

  let position = 0;
  const visited = {};

  for (let i = 0; i < normalized.length; i += 1) {
    position += normalized[position];
    // takes care of false loops, example [1, 1, 1, -1], last 2 are a false loop
    if (!visited[position]) {
      visited[position] = true;
      continue;
    }
    return false;
  }

  return position === 0 || position === length;
};

console.log(isCircular([2, 2, -1]) === true);
console.log(isCircular([5, -4, -1]) === true);
console.log(isCircular([5, 0, -1]) === false);
