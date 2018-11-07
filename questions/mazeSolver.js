/*
Implement a maze search algo that returns true if it has a solution and false if it doesn’t
from top to bottom

ex:[
  [0, 0, 0, 1],
  [0, 0, 0, 1],
  [0, 0, 0, 1]
]

true

ex:
ex:[
  [1, 0, 0, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1]
]

true

ex: [
[0, 1]
[0 ,0]
]

false
 */

class MazeSolver {
  static getAboveTile(maze, row, col, visited) {
    const upper = row - 1;
    if (upper < 0) {
      return false;
    }

    if (visited.includes(`${upper}${col}`)) {
      return false;
    }

    return maze[upper][col];
  }

  static getBelowTile(maze, row, col, visited) {
    const lower = row + 1;
    if (lower >= maze.length) {
      return false;
    }

    if (visited.includes(`${lower}${col}`)) {
      return false;
    }

    const value = maze[lower][col];

    if ((lower === maze.length - 1) && (value === 1)) {
      return 'ans';
    }

    return value;
  }

  static getLeftTile(maze, row, col, visited) {
    const left = col - 1;
    if (left < 0) {
      return false;
    }

    if (visited.includes(`${row}${left}`)) {
      return false;
    }

    return maze[row][left];
  }

  static getRightTile(maze, row, col, visited) {
    const rowLength = maze[0].length;
    const right = col + 1;

    if (right >= rowLength) {
      return false;
    }

    if (visited.includes(`${row}${right}`)) {
      return false;
    }

    return maze[row][right];
  }

  static findExit(maze, row, col, endRow, visited = []) {
    const visitedStr = `${row}${col}`;
    visited.push(visitedStr);

    const above = MazeSolver.getAboveTile(maze, row, col, visited);
    const below = MazeSolver.getBelowTile(maze, row, col, visited);
    const left = MazeSolver.getLeftTile(maze, row, col, visited);
    const right = MazeSolver.getRightTile(maze, row, col, visited);

    if (below === 'ans') {
      return {
        result: true,
        visited: [...visited, `${row + 1}${col}`],
      };
    }

    if (below === 1) {
      return MazeSolver.findExit(maze, row + 1, col, endRow, [...visited]);
    }

    if (above === 1) {
      return MazeSolver.findExit(maze, row - 1, col, endRow, [...visited]);
    }

    if (left === 1) {
      return MazeSolver.findExit(maze, row, col - 1, endRow, [...visited]);
    }

    if (right === 1) {
      return MazeSolver.findExit(maze, row, col + 1, endRow, [...visited]);
    }

    return undefined;
  }

  static solve(maze) {
    // NOTE error checking is EZ and i dont wanna do it for this one :/
    const endRow = maze.length - 1;
    const firstrow = maze[0];
    const ans = [];
    for (let row = 0; row < firstrow.length; row += 1) {
      const element = firstrow[row];
      if (element === 1) {
        ans.push(MazeSolver.findExit(maze, 0, row, endRow));
      }
    }

    return ans[0];
  }
}

console.log(MazeSolver.solve([
  [0, 0, 0, 1],
  [0, 0, 0, 1],
  [0, 0, 0, 1],
]));

console.log(MazeSolver.solve([
  [1, 0, 0, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1],
]));

console.log(MazeSolver.solve([
  [0, 1],
  [0, 0],
]));
