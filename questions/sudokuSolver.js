/*
  Write a program to solve a Sudoku puzzle by filling the empty cells.

  A sudoku solution must satisfy all of the following rules:

  Each of the digits 1-9 must occur exactly once in each row.
  Each of the digits 1-9 must occur exactly once in each column.
  Each of the the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
  Empty cells are indicated by the character '.'.

  thanks to https://medium.com/@george.seif94/solving-sudoku-using-a-simple-search-algorithm-3ac44857fee8
*/

class SudokuUtils {
  static usedInRow(board, row, num) {
    for (let col = 0; col < board[row].length; col += 1) {
      const value = board[row][col];
      if (Number(value) !== Number(num)) {
        continue;
      }

      return true;
    }

    return false;
  }

  static usedInCol(board, col, num) {
    for (let row = 0; row < board.length; row += 1) {
      const value = board[row][col];

      if (Number(value) !== Number(num)) {
        continue;
      }

      return true;
    }

    return false;
  }

  static usedInBox(board, boxStartRow, boxStartCol, num) {
    for (let row = 0; row < 3; row += 1) {
      for (let col = 0; col < 3; col += 1) {
        const value = board[row + boxStartRow][col + boxStartCol];
        if (Number(value) !== Number(num)) {
          continue;
        }

        return true;
      }
    }

    return false;
  }

  static isSafe(board, row, col, num) {
    const isSafeRow = !SudokuUtils.usedInRow(board, row, num);
    const isSafeCol = !SudokuUtils.usedInCol(board, col, num);

    const isSafeGrid = !SudokuUtils.usedInBox(board, row - row % 3, col - col % 3, num);

    return isSafeCol && isSafeRow && isSafeGrid;
  }

  static getUnassignedLocation(board) {
    for (let row = 0; row < board.length; row += 1) {
      for (let col = 0; col < board[row].length; col += 1) {
        if (board[row][col] === '.') {
          return [row, col];
        }
      }
    }

    return [9, 9];
  }

  static solve(board) {
    const unnasignedLocation = SudokuUtils.getUnassignedLocation(board);

    if (unnasignedLocation.join('') === '99') {
      return board;
    }

    const row = unnasignedLocation[0];
    const col = unnasignedLocation[1];

    for (let num = 1; num <= 9; num += 1) {
      if (!SudokuUtils.isSafe(board, row, col, num)) {
        continue;
      }

      board[row][col] = num.toString();

      if (SudokuUtils.solve(board)) {
        return board;
      }

      board[row][col] = '.';
    }

    return false;
  }
}


const solveSudoku = board => console.log(SudokuUtils.solve(board));

solveSudoku([
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]);
