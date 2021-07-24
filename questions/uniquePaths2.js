/*
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
The robot can only move either down or right at any point in time.
The robot is trying to reach the bottom-right corner of the grid
Now consider if some obstacles are added to the grids. How many unique paths would there be?
An obstacle and space is marked as 1 and 0 respectively in the grid.

Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
Output: 2
Explanation: There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right

Input: obstacleGrid = [[0,1],[0,0]]
Output: 1
*/

const uniquePathsWithObstacles = (grid) => {
  if (grid[0][0] === 1) {
    return 0;
  }

  for (let i = 0; i < grid[0].length; i += 1) {
    if (grid[0][i] === 1) {
      grid[0][i] = 0;
      continue;
    }

    grid[0][i] = 1;
  }

  for (let i = 1; i < grid.length; i += 1) {
    if (grid[i][0] === 1) {
      grid[i][0] = 0;
      continue;
    }

    grid[i][0] = 1;
  }


  for (let rowIndex = 1; rowIndex < grid.length; rowIndex += 1) {
    const row = grid[rowIndex];
    for (let colIndex = 1; colIndex < row.length; colIndex += 1) {
      const cell = row[colIndex];

      if (cell === 1) {
        grid[rowIndex][colIndex] = 0;
        continue;
      }

      const up = grid[rowIndex - 1][colIndex];
      const left = grid[rowIndex][colIndex - 1];

      grid[rowIndex][colIndex] = up + left;
    }
  }

  return grid[grid.length - 1][grid[0].length - 1];
};

console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]]));
console.log(uniquePathsWithObstacles([[0, 1], [0, 0]]));
console.log(uniquePathsWithObstacles([[0, 0, 0]]));
console.log(uniquePathsWithObstacles([[0]]));
