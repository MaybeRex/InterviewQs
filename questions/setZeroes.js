/*
Given an m x n matrix. If an element is 0, set its entire row and column to 0. Do it in-place.

Follow up:

A straight forward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?

Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
*/

// extra challenge, use O(1) space complexity
const setZeroes = (matrix) => {
  // set x's for the spots i gotta zero out
  for (let rowIndex = 0; rowIndex < matrix.length; rowIndex += 1) {
    for (let colIndex = 0; colIndex < matrix[rowIndex].length; colIndex += 1) {
      const cell = matrix[rowIndex][colIndex];
      if (cell !== 0) {
        continue;
      }

      // "zero" up
      for (let i = rowIndex - 1; i >= 0; i -= 1) {
        if (matrix[i][colIndex] === 0) {
          continue;
        }
        matrix[i][colIndex] = 'x';
      }

      // "zero" down
      for (let i = rowIndex + 1; i < matrix.length; i += 1) {
        if (matrix[i][colIndex] === 0) {
          continue;
        }
        matrix[i][colIndex] = 'x';
      }

      // "zero" left
      for (let i = colIndex - 1; i >= 0; i -= 1) {
        if (matrix[rowIndex][i] === 0) {
          continue;
        }
        matrix[rowIndex][i] = 'x';
      }

      // "zero" right
      for (let i = colIndex + 1; i < matrix[rowIndex].length; i += 1) {
        if (matrix[rowIndex][i] === 0) {
          continue;
        }
        matrix[rowIndex][i] = 'x';
      }
    }
  }

  for (let rowIndex = 0; rowIndex < matrix.length; rowIndex += 1) {
    for (let colIndex = 0; colIndex < matrix[rowIndex].length; colIndex += 1) {
      if (matrix[rowIndex][colIndex] === 'x') {
        matrix[rowIndex][colIndex] = 0;
      }
    }
  }

  return matrix;
};

console.log(setZeroes([[1, 1, 1], [1, 0, 1], [1, 1, 1]]));
console.log(setZeroes([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]));
