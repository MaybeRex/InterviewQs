/*
Given two integers n and k, return all possible combinations of k numbers out of the range [1, n].
You may return the answer in any order.

Input: n = 4, k = 2
Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]

Input: n = 1, k = 1
Output: [[1]]
*/

const backTrackCombine = (first, current, ans, n, k) => {
  if (current.length === k) {
    ans.push(current);
  }

  for (let i = first; i <= n; i += 1) {
    current.push(i);
    backTrackCombine(i + 1, [...current], ans, n, k);
    current.pop();
  }
};

const combine = (n, k) => {
  const ans = [];
  backTrackCombine(1, [], ans, n, k);
  return ans;
};

console.log(combine(5, 3));
