/*
The set [1, 2, 3, ..., n] contains a total of n! unique permutations.

By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

"123"
"132"
"213"
"231"
"312"
"321"
Given n and k, return the kth permutation sequence.

Input: n = 3, k = 3
Output: "213"

Input: n = 4, k = 9
Output: "2314"

Input: n = 3, k = 1
Output: "123"
*/

// this works idk
const getPermutation = (length, sequenceTarget) => {
  const originalList = [];

  for (let i = 1; i <= length; i += 1) {
    originalList.push(i);
  }

  let ans = [];

  ans.push([originalList.shift()]);

  while (originalList.length) {
    const next = originalList.shift();
    const newAns = [];

    for (let i = 0; i < ans.length; i += 1) {
      const currentSubArray = ans[i];
      for (let insert = 0; insert <= currentSubArray.length; insert += 1) {
        const newSub = [...currentSubArray];
        newSub.splice(insert, 0, next);
        newAns.push([...newSub]);
      }
    }

    ans = [...newAns];
  }

  ans = ans.map(item => Number(item.join('')));

  return ans.sort()[sequenceTarget - 1].toString();
};

// console.log(getPermutation(3, 3), 213);
// console.log(getPermutation(4, 9), 2314);
console.log(getPermutation(9, 305645));
