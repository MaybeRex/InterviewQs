/*
Given an m x n grid of characters board and a string word, return true if word exists in the grid.
The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are
horizontally or vertically neighboring. The same letter cell may not be used more than once.

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
*/

const dig = (grid, str, currentStrIndex, rowIndex, colIndex, visited = {}, accum = '') => {
  if (accum === str) {
    return true;
  }

  const nextLetter = str[currentStrIndex];
  visited[`${rowIndex}-${colIndex}`] = true;
  let hasSolution = false;

  // look up
  if (grid[rowIndex - 1] && grid[rowIndex - 1][colIndex] === nextLetter && !visited[`${rowIndex - 1}-${colIndex}`]) {
    hasSolution = dig(grid, str, currentStrIndex + 1, rowIndex - 1, colIndex, { ...visited }, accum + grid[rowIndex - 1][colIndex]);
  }

  if (hasSolution) return true;

  // look right
  if (grid[rowIndex][colIndex + 1] && grid[rowIndex][colIndex + 1] === nextLetter && !visited[`${rowIndex}-${colIndex + 1}`]) {
    hasSolution = dig(grid, str, currentStrIndex + 1, rowIndex, colIndex + 1, { ...visited }, accum + grid[rowIndex][colIndex + 1]);
  }

  if (hasSolution) return true;

  // look down
  if (grid[rowIndex + 1] && grid[rowIndex + 1][colIndex] === nextLetter && !visited[`${rowIndex + 1}-${colIndex}`]) {
    hasSolution = dig(grid, str, currentStrIndex + 1, rowIndex + 1, colIndex, { ...visited }, accum + grid[rowIndex + 1][colIndex]);
  }

  if (hasSolution) return true;

  // look left
  if (grid[rowIndex][colIndex - 1] && grid[rowIndex][colIndex - 1] === nextLetter && !visited[`${rowIndex}-${colIndex - 1}`]) {
    hasSolution = dig(grid, str, currentStrIndex + 1, rowIndex, colIndex - 1, { ...visited }, accum + grid[rowIndex][colIndex - 1]);
  }

  return hasSolution;
};

const exist = (grid, str) => {
  for (let rowIndex = 0; rowIndex < grid.length; rowIndex += 1) {
    for (let colIndex = 0; colIndex < grid[rowIndex].length; colIndex += 1) {
      if (grid[rowIndex][colIndex] !== str[0]) {
        continue;
      }

      const hasSolution = dig(grid, str, 1, rowIndex, colIndex, {}, str[0]);

      if (hasSolution) {
        return true;
      }
    }
  }

  return false;
};

console.log(exist([['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], 'ABCCED'), true);
console.log(exist([['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], 'SEE'), true);
console.log(exist([['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], 'ABCB'), false);
console.log(exist([['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], 'ABCESCJ'), false);
console.log(exist([['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], 'SECB'), true);
console.log(exist([['a']], 'b'), false);
console.log(exist([['C','A','A'],['A','A','A'],['B','C','D']], 'AAB'), true);
