/*
Given an integer n, return all the structurally unique BST's (binary search trees),
which has exactly n nodes of unique values from 1 to n. Return the answer in any order.

Input: n = 3
Output: [[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

const generate = (start, end) => {
  if (start > end) {
    return [null];
  }

  const ans = [];
  for (let i = start; i <= end; i += 1) {
    const leftTrees = generate(start, i - 1);
    const rightTrees = generate(i + 1, end);

    for (let j = 0; j < leftTrees.length; j += 1) {
      for (let k = 0; k < rightTrees.length; k += 1) {
        const currentTree = new TreeNode(i, leftTrees[j], rightTrees[k]);
        ans.push(currentTree);
      }
    }
  }

  return [...ans];
};

const generateTrees = (n) => {
  if (n < 1) {
    return [];
  }
  return generate(1, n);
};

console.log(generateTrees(3).length);
