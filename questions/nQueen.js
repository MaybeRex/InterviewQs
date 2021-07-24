const checkSafety = (row, col, solutions) => {
  for (let i = 0; i < solutions.length; i += 1) {
    const queenSolution = solutions[i];

    const firstDiagonal = row - col;
    const secondDiagonal = row + col;

    const firstDiagonalQueen = queenSolution[0] - queenSolution[1];
    const secondDiagonalQueen = queenSolution[0] + queenSolution[1];

    if (firstDiagonal === firstDiagonalQueen) {
      return false;
    }

    if (secondDiagonal === secondDiagonalQueen) {
      return false;
    }

    if (col === queenSolution[1]) {
      return false;
    }
  }

  return true;
};

const solveQueenBacktrack = (n, row, solutions, overall) => {
  if (n === row) {
    overall.push(solutions);
    return true;
  }

  for (let col = 0; col < n; col += 1) {
    let isQueenSafe = true;

    for (let queenIndex = 0; queenIndex < solutions.length; queenIndex += 1) {
      // check if current row and col is safe
      if (!checkSafety(row, col, solutions) || !isQueenSafe) {
        isQueenSafe = false;
      }
    }

    if (!isQueenSafe) {
      continue;
    }

    solutions.push([row, col]);

    // this is the backtrack
    if (solveQueenBacktrack(n, row + 1, [...solutions], overall)) {
      continue;
    }

    // actually this is the "back" in the backtrack
    solutions.pop();
  }

  return false;
};

const solveNQueens = (n) => {
  const final = [];
  solveQueenBacktrack(n, 0, [], final);
  const queenStyle = [];

  for (let i = 0; i < final.length; i += 1) {
    const strAns = [];
    for (let j = 0; j < final[i].length; j += 1) {
      const dots = new Array(n).fill('.');
      dots.splice(final[i][j][1], 1, 'Q');
      strAns.push(dots.join(''));
    }

    queenStyle.push(strAns);
  }

  return queenStyle;
};

console.log(solveNQueens(5));
console.log(solveNQueens(4));
console.log(solveNQueens(1));
