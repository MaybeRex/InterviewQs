/*
Given an array of integers heights representing the histogram's bar height where the width of each bar is 1,
return the area of the largest rectangle in the histogram.

Input: heights = [2,1,5,6,2,3]
Output: 10
Explanation: The above is a histogram where width of each bar is 1.
The largest rectangle is shown in the red area, which has an area = 10 units.

Input: heights = [2,4]
Output: 4
*/

// two pointer method, n^2 :(
const largestRectangleAreaSlow = (hist) => {
  let first = 0;
  let last = hist.length - 1;

  let max = hist[0];

  // first = 0, last = 1, min = 2;  (1 - 0) * 2
  while (first < last) {
    const min = Math.min(...hist.slice(first, last + 1));
    const current = (last - first + 1) * min;

    if (current > max) {
      max = current;
    }

    if (hist[first] > hist[last]) {
      last -= 1;
      continue;
    }

    first += 1;
  }

  return max;
};

const largestRectangleArea = (hist, start = 0, end = hist.length) => {
  if (hist.length <= 1) {
    return isNaN(hist[0]) ? -Infinity : hist[0];
  }

  let min = hist[0];
  let minIndex = 0;

  for (let i = 0; i < hist.length; i += 1) {
    if (hist[i] > min) {
      continue;
    }

    min = hist[i];
    minIndex = i;
  }
  const current = min * end;
  return Math.max(
    current,
    largestRectangleArea(hist.slice(start, minIndex)),
    largestRectangleArea(hist.slice(minIndex + 1)),
  );
};

console.log(largestRectangleArea([2,1,5,6,2,3]));
console.log(largestRectangleArea([2,4]));
console.log(largestRectangleArea([0,9]));
console.log(largestRectangleArea([0]));
