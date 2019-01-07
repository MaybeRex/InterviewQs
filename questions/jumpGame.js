/*
  Input: [2,3,1,1,4]
  Output: 2
  Explanation: The minimum number of jumps to reach the last index is 2.
  Jump 1 step from index 0 to 1, then 3 steps to the last index.

  depth first search approach does not work,
  use breadth first search
 */

const jump = (numList) => {
  if (!numList.length || numList.length === 1) {
    return 0;
  }

  const { length } = numList;

  const visited = {};

  const searchQueue = [{
    value: numList[0],
    step: 0,
    index: 0,
  }];

  while (searchQueue.length) {
    const current = searchQueue.shift();

    for (let i = current.value; i > 0; i -= 1) {
      const newIndex = current.index + i;
      const nextStep = current.step + 1;

      if (visited[newIndex]) {
        continue;
      }

      visited[newIndex] = true;

      if (newIndex === (length - 1)) {
        return nextStep;
      }

      searchQueue.push({
        value: numList[newIndex],
        step: nextStep,
        index: newIndex,
      });
    }
  }

  return length;
};

console.log(jump([1, 2]));
console.log(jump([2, 3, 1, 1, 4]));
console.log(jump([5, 6, 4, 4, 6, 9, 4, 4, 7, 4, 4, 8, 2, 6, 8, 1, 5, 9, 6, 5, 2, 7, 9, 7, 9, 6, 9,
  4, 1, 6, 8, 8, 4, 4, 2, 0, 3, 8, 5]));
