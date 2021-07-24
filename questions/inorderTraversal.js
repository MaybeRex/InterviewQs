/*
Given the root of a binary tree, return the inorder traversal of its nodes' values.

Input: root = [1,null,2,3]
Output: [1,3,2]

Input: root = []
Output: []

Input: root = [1]
Output: [1]

Input: root = [1,null,2]
Output: [1,2]
*/

const inOrderTraversal = (node, ans) => {
  if (node.left) {
    inOrderTraversal(node.left, ans);
  }

  ans.push(node.val);

  if (node.right) {
    inOrderTraversal(node.right, ans);
  }
};

const inorderTraversal = (head) => {
  const ans = [];

  if (!head) {
    return ans;
  }

  inOrderTraversal(head, ans);
  return ans;
};

