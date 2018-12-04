/*
  Given a 2-dimensional map where each tile is either land or sea, count the number of islands.
  An island is a contiguous set of tiles that are connected horizontally or vertically.
  The following map has three islands (x'es are land, zeros are sea);

  000000
  x0xx0x
  xxx00x
  00000x
 */

const LAND_VALUE = 'x';
const SEA_VALUE = '0';

const followIslandPath = (board, row, col, visited, path = []) => {
  const idString = `${row}${col}`;

  visited[idString] = true;
  path.push(`${row}${col}`);

  // find values in every direction

  // check above
  const prevRow = row - 1;
  if (row !== 0 && !visited[`${prevRow}${col}`] && board[prevRow][col] === LAND_VALUE) {
    followIslandPath(board, prevRow, col, visited, path);
  }

  // check below
  const nextRow = row + 1;
  if (nextRow < board.length && !visited[`${nextRow}${col}`] && board[nextRow][col] === LAND_VALUE) {
    followIslandPath(board, nextRow, col, visited, path);
  }

  // check left
  const nextCol = col + 1;
  if (nextCol < board[row].length && !visited[`${row}${nextCol}`] && board[row][nextCol] === LAND_VALUE) {
    followIslandPath(board, row, nextCol, visited, path);
  }

  // check right
  const prevCol = col - 1;
  if (prevCol !== 0 && !visited[`${row}${prevCol}`] && board[row][prevCol] === LAND_VALUE) {
    followIslandPath(board, row, nextCol, visited, path);
  }

  return path;
};

const countVisited = (board) => {
  const visited = {};
  const islandPaths = [];

  for (let row = 0; row < board.length; row += 1) {
    for (let col = 0; col < board[row].length; col += 1) {
      const value = board[row][col];

      if (value === SEA_VALUE || visited[`${row}${col}`]) {
        continue;
      }

      islandPaths.push(followIslandPath(board, row, col, visited));
    }
  }

  return islandPaths.length;
};

console.log(countVisited([
  ['0', '0', '0', '0', '0', '0'],
  ['x', '0', 'x', 'x', '0', 'x'],
  ['x', 'x', 'x', '0', '0', 'x'],
  ['0', '0', '0', '0', '0', 'x'],
]) === 2);

console.log(countVisited([
  ['x', '0', '0', '0', 'x', '0'],
  ['x', '0', 'x', 'x', '0', 'x'],
  ['x', '0', 'x', '0', '0', 'x'],
  ['0', '0', '0', 'x', '0', 'x'],
]) === 5);
