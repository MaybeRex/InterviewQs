/* eslint-disable no-unused-vars */
/*
You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/

const permute = (arr, ans = [], cache = {}) => {
  if (!arr.length) {
    return ans;
  }

  if (!ans.length) {
    ans.push([arr.shift()]);
  }

  const insertion = arr.shift();
  const newAns = [];

  for (let i = 0; i < ans.length; i += 1) {
    for (let j = 0; j <= ans[i].length; j += 1) {
      const copy = [...ans[i]];
      copy.splice(j, 0, insertion);
      const subAnsId = copy.join('');

      if (cache[subAnsId]) {
        continue;
      }

      cache[subAnsId] = true;

      newAns.push(copy);
    }
  }

  return permute(arr, newAns, cache);
};

const climbStairsSlow = (n) => {
  const minWidth = Math.ceil(n / 2);
  const count = 1;
  const ans = [];
  const init = [];

  if (n === 1) {
    return 1;
  }

  if (n === 2) {
    return 2;
  }

  for (let i = 0; i < n - 1; i += 1) {
    if (i === 0) {
      init.push(2);
      continue;
    }

    init.push(1);
  }

  while (init.length >= minWidth) {
    ans.push(...permute([...init]));

    init.pop();
    if (!init.length) {
      break;
    }

    init.pop();
    init.unshift(2);
  }

  return count + ans.length;
};

const climbStairs = (n) => {
  if (n === 0 || n === 1 || n === 2) {
    return n;
  }

  const arr = [1, 2];

  for (let i = 2; i < n; i += 1) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }

  return arr.pop();
};

// console.log(climbStairs(2));
// console.log(climbStairs(3));
console.log(climbStairs(4), 5);
console.log(climbStairs(5), 8);
console.log(climbStairs(6), 13);
console.log(climbStairs(7), 21);
