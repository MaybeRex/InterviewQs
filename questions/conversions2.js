/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/*
Implement a class that inputs a file of units conversions and also a file that asks units to convert
and export a file with the answer
conversion input
  [[A, B, 3],
  [B, C, 5]]
convert in question
  A, C
ouput
  15
 */

const dps = (map, current, end, values, visited = {}) => {
  visited[current] = true;

  if (current === end) {
    return true;
  }

  if (!map[current]) {
    return false;
  }

  for (const key in map[current]) {
    if (visited[key]) {
      continue;
    }

    const value = map[current][key];
    values.push(value);

    if (dps(map, key, end, values, visited)) {
      return true;
    }

    values.pop();
  }

  return false;
};

const convert = (input, seek) => {
  const map = {};

  for (let i = 0; i < input.length; i += 1) {
    const [first, second, value] = input[i];

    if (map[first]) {
      map[first][second] = value;
    } else {
      map[first] = {};
      map[first][second] = value;
    }

    if (map[second]) {
      map[second][first] = 1 / value;
    } else {
      map[second] = {};
      map[second][first] = 1 / value;
    }
  }

  const [begin, end] = seek;
  const ans = [];

  const hasSolution = dps(map, begin, end, ans);

  if (!hasSolution) {
    return -1;
  }

  let product = 1;

  for (let i = 0; i < ans.length; i += 1) {
    product *= ans[i];
  }

  return product;
};

console.log(convert([
  ['A', 'B', 3],
  ['B', 'F', 20],
  ['B', 'C', 5],
  ['C', 'D', 10],
], ['A', 'D']), 150);

console.log(convert(
  [
    ['B', 'C', 5],
    ['A', 'F', 5],
    ['A', 'B', 3],
    ['X', 'Y', 20],
    ['C', 'D', (1 / 15)],
  ],
  ['A','D'],
) , 1);

console.log(convert(
  [
    ['B', 'C', 5],
    ['A', 'F', 5],
    ['A', 'B', 3],
    ['X', 'Y', 20],
    ['C', 'D', (1 / 15)],
  ],
  ['A','J'],
) , -1);
