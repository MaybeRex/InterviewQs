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
  let hasPaths = false;
  visited[idString] = true;
  path.push([row, col]);

  // find values in every direction

  // check above
  if (row !== 0 && !visited[`${row - 1}${col}`] && board[row - 1][col] === LAND_VALUE) {
    hasPaths = true;
    followIslandPath(board, row - 1, col, visited);
  }

  // TODO fil these out
  // check below
  // if()

  // check left

  // check right

  return hasPaths ? path : null;
};

const countVisited = (board) => {
  const visited = {};
  const islandPaths = [];

  for (let row = 0; row < board.length; row += 1) {
    for (let col = 0; col < board[row]; col += 1) {
      const value = board[row][col];

      if (value === SEA_VALUE) {
        continue;
      }

      islandPaths.push(followIslandPath(board, row, col, visited));
    }
  }

  return islandPaths.length;
};
