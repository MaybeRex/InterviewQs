const minDistance = (first, second) => {
  const firstLength = first.length;
  const secondLength = second.length;

  if (!(secondLength * firstLength)) {
    return firstLength + secondLength;
  }

  const d = [];

  for (let rowIndex = 0; rowIndex <= firstLength; rowIndex += 1) {
    d.push(new Array(secondLength + 1).fill(''));
  }

  for (let i = 0; i < d.length; i += 1) {
    d[i][0] = i;
  }

  for (let j = 0; j < d[0].length; j += 1) {
    d[0][j] = j;
  }

  for (let i = 1; i < d.length; i += 1) {
    for (let j = 1; j < d[i].length; j += 1) {
      const left = d[i - 1][j] + 1;
      const down = d[i][j - 1] + 1;
      let diagonal = d[i - 1][j - 1];

      if (first[i - 1] !== second[j - 1]) {
        diagonal += 1;
      }

      d[i][j] = Math.min(left, Math.min(down, diagonal));
    }
  }

  return d[d.length - 1][d[0].length - 1];
};

console.log(minDistance('horse', 'ros'), 3);
console.log(minDistance('intention', 'execution'), 5);
