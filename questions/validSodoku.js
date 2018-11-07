const isValidSudoku = (board) => {
  if (board.length < 3) {
    return false;
  }

  const { length } = board;
  const blockLength = 3;
  const blockNum = (length / blockLength) ** 2;

  const blocks = [];
  const trasnsposed = [];

  // create transposed and block arrays
  for (let i = 0; i < blockNum; i += 1) {
    blocks.push([]);
    trasnsposed.push([]);
  }

  // populate transposed and block array
  let colScore = -3;
  for (let column = 0; column < length; column += 1) {
    const row = board[column];
    if (column % 3 === 0) {
      colScore += 3;
    }

    let rowScore = -1;
    for (let item = 0; item < row.length; item += 1) {
      if (item % 3 === 0) {
        rowScore += 1;
        rowScore %= 3;
      }

      const blockIndex = rowScore + colScore;
      blocks[blockIndex].push(row[item]);
      trasnsposed[item].push(row[item]);
    }
  }

  // iterate and create sets, checking them all
  for (let i = 0; i < board.length; i += 1) {
    // declare caches
    const blockMap = new Map();
    const transposedMap = new Map();
    const ogMap = new Map();

    for (let j = 0; j < board[i].length; j += 1) {
      const ogValue = board[i][j];
      const blockValue = blocks[i][j];
      const transposedValue = trasnsposed[i][j];

      if (!ogMap.has(ogValue) || ogValue === '.') {
        ogMap.set(ogValue, true);
      } else {
        return false;
      }

      if (!transposedMap.has(transposedValue) || transposedValue === '.') {
        transposedMap.set(transposedValue, true);
      } else {
        return false;
      }

      if (!blockMap.has(blockValue) || blockValue === '.') {
        blockMap.set(blockValue, true);
      } else {
        return false;
      }
    }
  }

  return true;
};


console.log(isValidSudoku([
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]));

console.log(isValidSudoku([
  ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]));
