/*
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. 
DO NOT allocate another 2D matrix and do the rotation.

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]

Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

Input: matrix = [[1]]
Output: [[1]]

Input: matrix = [[1,2],[3,4]]
Output: [[3,1],[4,2]]
*/

const rotateImage = (image) => {
  const { length } = image;

  // best solution is to transpose and to reflect the array

  // transpose -> col into rows
  for (let rowIndex = 0; rowIndex < image.length; rowIndex += 1) {
    // running count so that they are not swapped back
    for (let colIndex = rowIndex; colIndex < image[rowIndex].length; colIndex += 1) {
      const temp = image[rowIndex][colIndex];
      image[rowIndex][colIndex] = image[colIndex][rowIndex];
      image[colIndex][rowIndex] = temp;
    }
  }

  // reflect, make the last column the first and the first the last ...
  for (let rowIndex = 0; rowIndex < image.length; rowIndex += 1) {
    // image[rowIndex].length / 2 so that the reflection is not swapped back
    for (let colIndex = 0; colIndex < image[rowIndex].length / 2; colIndex += 1) {
      const temp = image[rowIndex][colIndex];
      const swappedCol = length - 1 - colIndex;
      image[rowIndex][colIndex] = image[rowIndex][swappedCol];
      image[rowIndex][swappedCol] = temp;
    }
  }

  return image;
};

console.log(rotateImage([
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
]), [
  [7, 4, 1], [8, 5, 2], [9, 6, 3],
]);
