/*
Given a rows x cols binary matrix filled with 0's and 1's,
find the largest rectangle containing only 1's and return its area.

Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
Output: 6
Explanation: The maximal rectangle is shown in the above picture.
*/

const maximalRectangle = (matrix) => {
  let max = 0;
  for (let rowIndex = 0; rowIndex < matrix.length; rowIndex += 1) {
    const row = matrix[rowIndex];
    for (let colIndex = 0; colIndex < row.length; colIndex += 1) {
      const cell = row[colIndex];

      if (cell !== '1') {
        continue;
      }

      let length = 1;

      while (matrix[rowIndex][colIndex + length] && matrix[rowIndex][colIndex + length] === '1') {
        length += 1;
      }

      for (let maxLength = 0; maxLength <= length; maxLength += 1) {
        let height = 1;
        while (
          matrix[rowIndex + height]
          && !matrix[rowIndex + height].slice(colIndex, colIndex + maxLength).includes('0')
        ) {
          height += 1;
        }

        const area = maxLength * height;

        if (area > max) {
          max = area;
        }
      }
    }
  }

  return max;
};

console.log(maximalRectangle([['1','0','1','0','0'],['1','0','1','1','1'],['1','1','1','1','1']]));
console.log(maximalRectangle(
  [
    ['0','0','1','0'],
    ['1','1','1','1'],
    ['1','1','1','1'],
    ['1','1','1','0'],
    ['1','1','0','0'],
    ['1','1','1','1'],
    ['1','1','1','0'],
  ],
));
// console.log(maximalRectangle([['0']]));
// console.log(maximalRectangle([['0','0']]));
console.log(maximalRectangle([
  ['1','1','1','1','1','1','1','1'],
  ['1','1','1','1','1','1','1','0'],
  ['1','1','1','1','1','1','1','0'],
  ['1','1','1','1','1','0','0','0'],
  ['0','1','1','1','1','0','0','0']]));
