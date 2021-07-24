/*
Given an m x n matrix, return all elements of the matrix in spiral order.

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/

const canMove = (row, col, matrix, direction, visted) => {
  switch (direction) {
    case 'up': {
      if (matrix[row - 1] === undefined || visted[`${row - 1}${col}`]) {
        return false;
      }
      return true;
    }
    case 'right': {
      if (matrix[row][col + 1] === undefined || visted[`${row}${col + 1}`]) {
        return false;
      }
      return true;
    }
    case 'down': {
      if (matrix[row + 1] === undefined || visted[`${row + 1}${col}`]) {
        return false;
      }
      return true;
    }
    case 'left': {
      if (matrix[row][col - 1] === undefined || visted[`${row}${col - 1}`]) {
        return false;
      }
      return true;
    }
    default: {
      throw new Error('wtf man fr');
    }
  }
};

const getNewDirection = (direction) => {
  switch (direction) {
    case 'right': return 'down';
    case 'down': return 'left';
    case 'left': return 'up';
    case 'up': return 'right';
    default: return 'right';
  }
};

const getNewCoordinates = (row, col, direction) => {
  switch (direction) {
    case 'right': return [row, col + 1];
    case 'down': return [row + 1, col];
    case 'left': return [row, col - 1];
    case 'up': return [row - 1, col];
    default: return [0, 0];
  }
};

const spiralOrder = (matrix) => {
  const matrixCount = matrix.length * matrix[0].length;
  const ans = [];
  const visted = {};

  let direction = 'right';
  let row = 0;
  let col = 0;
  for (let i = 0; i < matrixCount; i += 1) {
    ans.push(matrix[row][col]);
    visted[`${row}${col}`] = true;

    if (!canMove(row, col, matrix, direction, visted)) {
      direction = getNewDirection(direction);
    }

    [row, col] = getNewCoordinates(row, col, direction);
  }

  return ans;
};

console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [1, 2, 3, 6, 9, 8, 7, 4, 5]);
console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]),
  [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);
