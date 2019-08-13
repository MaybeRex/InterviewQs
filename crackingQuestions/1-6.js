/*
  Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, 
  write a method to rotate the image by 90 degrees Can you do this in place?
*/

// helped out by 
// https://code.likeagirl.io/rotate-an-2d-matrix-90-degree-clockwise-without-create-another-array-49209ea8b6e6
const rotateImage = (imageMatrix) => {
  const { length } = imageMatrix;
  const outerLoops = Math.floor(length / 2);
  const innerLoop = length - 1;

  for(let i = 0; i < outerLoops; i += 1) {
    for(let j = i; j < innerLoop - i; j += 1) {
      const temp = imageMatrix[i][j];

      imageMatrix[i][j] = imageMatrix[innerLoop - j][i];
      imageMatrix[innerLoop - j][i] = imageMatrix[innerLoop - i][innerLoop - j];
      imageMatrix[innerLoop - i][innerLoop - j] = imageMatrix[j][innerLoop - i];
      imageMatrix[j][innerLoop - i] = temp;
    }
  }

  return imageMatrix;
}

const first = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
]

const second = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

console.log(rotateImage(first))
console.log(rotateImage(second))
