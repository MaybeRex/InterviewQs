/*
Given a positive integer n,
generate an n x n matrix filled with elements from 1 to n2 in spiral order.

Input: n = 3
Output: [[1,2,3],[8,9,4],[7,6,5]]

Input: n = 1
Output: [[1]]
*/

const generateMatrix = (n) => {
  const visited = {};
  const ans = [];

  for (let i = 0; i < n; i += 1) {
    const newArr = [];

    for (let j = 0; j < n; j += 1) {
      newArr.push(1);
    }

    ans.push([...newArr]);
  }

  const count = n * n;


  let current = 1;

  let row = 0;
  let col = 0;

  while (current <= count) {
    // while having the ability to go right
    while (ans[row][col] && !visited[`${row}-${col}`]) {
      ans[row][col] = current;
      visited[`${row}-${col}`] = current;
      current += 1;
      col += 1;
    }

    col -= 1;
    row += 1;

    // while having the ability to go down
    while (ans[row] && !visited[`${row}-${col}`]) {
      ans[row][col] = current;
      visited[`${row}-${col}`] = current;
      current += 1;
      row += 1;
    }

    row -= 1;
    col -= 1;

    // while having the ability to go left
    while (ans[row][col] && !visited[`${row}-${col}`]) {
      ans[row][col] = current;
      visited[`${row}-${col}`] = current;
      current += 1;
      col -= 1;
    }

    col += 1;
    row -= 1;

    // while having the ability to go up
    while (ans[row] && !visited[`${row}-${col}`]) {
      ans[row][col] = current;
      visited[`${row}-${col}`] = current;
      current += 1;
      row -= 1;
    }

    row += 1;
    col += 1;
  }


  return ans;
};

// console.log(generateMatrix(3), [[1,2,3],[8,9,4],[7,6,5]]);
// console.log(generateMatrix(1), [[1]]);
// console.log(generateMatrix(12));
// console.log(generateMatrix(4));
console.log(generateMatrix(13));
