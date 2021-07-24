/*
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
The robot can only move either down or right at any point in time.
The robot is trying to reach the bottom-right corner of the grid
(marked 'Finish' in the diagram below).
How many possible unique paths are there?

Input: m = 3, n = 7
Output: 28

Input: m = 3, n = 2
Output: 3

Input: m = 3, n = 3
Output: 6
*/

// ehhhh good try
const solve = (matrix, row, col, rowLength, colLength, currentPath, paths) => {
  if (!matrix[row] || !matrix[row][col]) {
    return;
  }

  currentPath.push(`${row}-${col}`);

  if (row === rowLength - 1 && col === colLength - 1) {
    paths.push(currentPath);
    return;
  }

  solve(matrix, row + 1, col, rowLength, colLength, [...currentPath], paths);
  solve(matrix, row, col + 1, rowLength, colLength, [...currentPath], paths);
};

// eslint-disable-next-line no-unused-vars
const uniquePathsSlow = (rowLength, colLength) => {
  // generate matrix;
  const matrix = [];

  for (let i = 0; i < rowLength; i += 1) {
    matrix.push(new Array(colLength).fill(true));
  }

  const paths = [];

  solve(matrix, 0, 0, rowLength, colLength, [], paths);

  return paths.length;
};


const uniquePaths = (rowLength, colLength) => {
  // generate matrix;
  const matrix = [];

  for (let i = 0; i < rowLength; i += 1) {
    matrix.push(new Array(colLength).fill(true));
  }

  for (let i = 0; i < rowLength; i += 1) {
    matrix[i][0] = 1;
  }

  for (let i = 0; i < colLength; i += 1) {
    matrix[0][i] = 1;
  }

  for (let row = 1; row < rowLength; row += 1) {
    for (let col = 1; col < colLength; col += 1) {
      matrix[row][col] = matrix[row - 1][col] + matrix[row][col - 1];
    }
  }

  return matrix[rowLength - 1][colLength - 1];
};

console.log(uniquePaths(3, 7), 28);
console.log(uniquePaths(3, 2), 3);
console.log(uniquePaths(23, 12), 193536720);
