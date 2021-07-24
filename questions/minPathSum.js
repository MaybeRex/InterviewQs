/*
Given a m x n grid filled with non-negative numbers, find a path
from top left to bottom right, which minimizes the sum of all numbers along its path.
Note: You can only move either down or right at any point in time.

Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
Output: 7
Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.

Input: grid = [[1,2,3],[4,5,6]]
Output: 12

normally id use recursion to just calculate all the sums of all the paths.
but it seems like the trick is to look up and left and pick the minimum and just
add them up
*/


const minPathSum = (grid) => {
  const rowLength = grid.length;
  const colLength = grid[0].length;

  const ansGrid = [];

  for (let i = 0; i < rowLength; i += 1) {
    ansGrid.push(new Array(colLength).fill(0));
  }

  ansGrid[rowLength - 1][colLength - 1] = grid[rowLength - 1][colLength - 1];

  for (let colIndex = colLength - 2; colIndex >= 0; colIndex -= 1) {
    ansGrid[rowLength - 1][colIndex] = grid[rowLength - 1][colIndex]
      + ansGrid[rowLength - 1][colIndex + 1];
  }

  for (let rowIndex = rowLength - 2; rowIndex >= 0; rowIndex -= 1) {
    for (let colIndex = colLength - 1; colIndex >= 0; colIndex -= 1) {
      let right = ansGrid[rowIndex][colIndex + 1];
      const down = ansGrid[rowIndex + 1][colIndex];

      if (right === undefined) {
        right = Infinity;
      }

      const sum = grid[rowIndex][colIndex] + Math.min(right, down);
      ansGrid[rowIndex][colIndex] = sum;
    }
  }

  return ansGrid[0][0];
};

console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]), 7);
console.log(minPathSum([[1, 2, 3], [4, 5, 6]]), 12);
