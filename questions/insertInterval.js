/*
Given a set of non-overlapping intervals,
insert a new interval into the intervals (merge if necessary).
You may assume that the intervals were initially sorted according to their start times.

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]

Input: intervals = [], newInterval = [5,7]
Output: [[5,7]]

Input: intervals = [[1,5]], newInterval = [2,3]
Output: [[1,5]]

Input: intervals = [[1,5]], newInterval = [2,7]
Output: [[1,7]]
*/

const merge = (arrList) => {
  const ans = [];

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

const insert = (intervals, newInterval) => {
  const inserted = [];
  const [firstNew] = newInterval;
  let gotInserted = false;

  for (let i = 0; i < intervals.length; i += 1) {
    const subInterval = intervals[i];

    const [firstSub, secondSub] = subInterval;

    if (gotInserted) {
      inserted.push(...intervals.slice(i));
      break;
    }

    if (firstNew <= firstSub) {
      gotInserted = true;
      inserted.push(newInterval, subInterval);
      continue;
    }

    if (firstNew <= secondSub) {
      gotInserted = true;
      inserted.push(subInterval, newInterval);
      continue;
    }

    inserted.push(subInterval);
  }

  if (!gotInserted) {
    inserted.push(newInterval);
  }

  return merge(inserted);
};

console.log(insert([[1, 3], [6, 9]], [2, 5]), [[1, 5], [6, 9]]);
console.log(insert(
  [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8],
), [[1, 2], [3, 10], [12, 16]]);
console.log(insert([], [5, 7]), [[5, 7]]);
console.log(insert([[1, 5]], [2, 3]), [[1, 5]]);
console.log(insert([[1, 5]], [2, 7]), [[1, 7]]);
// console.log(insert());
