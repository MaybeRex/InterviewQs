/*
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,
and return an array of the non-overlapping intervals that cover all the intervals in the input.

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104
*/

const merge = (arrList) => {
  const ans = [];

  arrList = arrList.sort((a, b) => (a[0] - b[0]));

  while (arrList.length > 1) {
    const first = arrList.shift();
    const second = arrList.shift();

    const firstCopy = first.slice();
    const secondCopy = second.slice();

    const mixed = [];
    let merged = false;
    let init = null;

    while (first.length && second.length) {
      // if at any point theyre the same, they must be merged
      if (first[0] === second[0]) {
        merged = true;
      }

      if (first[0] < second[0]) {
        if (!init) {
          init = 'first';
        }

        if (init !== 'first') {
          merged = true;
        }

        mixed.push(first.shift());
        continue;
      }

      if (!init) {
        init = 'second';
      }

      if (init !== 'second') {
        merged = true;
      }

      mixed.push(second.shift());
    }

    mixed.push(...first);
    mixed.push(...second);

    if (merged) {
      arrList.unshift([mixed.shift(), mixed.pop()]);
      continue;
    }

    ans.push(firstCopy);
    arrList.unshift(secondCopy);
  }

  ans.push(...arrList);
  return ans;
};

// console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]));
// console.log(merge([[1, 4], [4, 5]]));
// console.log(merge([[1, 4], [0, 1]]));
console.log(merge([[2, 3], [4, 5], [6, 7], [8, 9], [1, 10]]));

// console.log(merge())
