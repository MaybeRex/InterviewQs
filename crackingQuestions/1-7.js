/*
  Write an algorithm such that if an element in an MxN matrix is 0, 
  its entire row and column is set to 0
*/

const bomba = (matrix, rowIndex, colIndex, cache) => {
  const cacheId = `${rowIndex}${colIndex}`;

  if(cache[cacheId]) {
    return;
  }

  cache[cacheId] = true;

  // clear out above
  let upperIndex = rowIndex - 1;

  while(matrix[upperIndex] && matrix[upperIndex][colIndex] !== undefined) {
    if(!matrix[upperIndex][colIndex]) {
      bomba(matrix, upperIndex, colIndex, cache);
      upperIndex -= 1;
      continue;
    }

    const cacheId = `${upperIndex}${colIndex}`;
    matrix[upperIndex][colIndex] = 0;
    cache[cacheId] = true;
    upperIndex -= 1;
  }

  // below
  let lowerIndex = rowIndex + 1;
  while(matrix[lowerIndex] && matrix[lowerIndex][colIndex] !== undefined) {
    if(!matrix[lowerIndex][colIndex]) {
      bomba(matrix, lowerIndex, colIndex, cache);
      lowerIndex += 1;
      continue;
    }

    const cacheId = `${lowerIndex}${colIndex}`;
    matrix[lowerIndex][colIndex] = 0;
    cache[cacheId] = true;
    lowerIndex += 1;
  }

  // left
  let leftIndex = colIndex - 1;
  while(matrix[rowIndex] && matrix[rowIndex][leftIndex] !== undefined) {
    if(!matrix[rowIndex][leftIndex]) {
      bomba(matrix, rowIndex, leftIndex, cache);
      leftIndex -= 1;
      continue;
    }

    const cacheId = `${rowIndex}${leftIndex}`;
    matrix[rowIndex][leftIndex] = 0;
    cache[cacheId] = true;
    leftIndex -= 1;
  }

  // right
  let rightIndex = colIndex + 1;
  while(matrix[rowIndex] && matrix[rowIndex][rightIndex] !== undefined) {
    if(!matrix[rowIndex][rightIndex]) {
      bomba(matrix, rowIndex, rightIndex, cache);
      rightIndex += 1;
      continue;
    }

    const cacheId = `${rowIndex}${rightIndex}`;
    matrix[rowIndex][rightIndex] = 0;
    cache[cacheId] = true;
    rightIndex += 1;
  }

}

const bomberMan = (matrix) => {
  const cache = {};

  for(let rowIndex = 0; rowIndex < matrix.length; rowIndex += 1) {
    const row = matrix[rowIndex];
    for(let colIndex = 0; colIndex < row.length; colIndex += 1) {
      const el = row[colIndex];

      if(el || cache[`${rowIndex}${colIndex}`]) {
        continue;
      }

      bomba(matrix, rowIndex, colIndex, cache);
    }
  }

  return matrix;
}

console.log(bomberMan([
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 0, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
]));

console.log(bomberMan([
  [1, 1, 0, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 1, 0, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 1, 0, 1, 1],
]));

console.log(bomberMan([
  [0, 1, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 0],
]));

console.log(bomberMan([
  [0, 0, 1, 0, 0],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
]));
