const backtrack = (n, ans = [], str = '', left = 0, right = 0) => {
  if (str.length === 2 * n) {
    ans.push(str);
    return;
  }

  if (left < n) {
    backtrack(n, ans, `${str}(`, left + 1, right);
  }

  if (right < left) {
    backtrack(n, ans, `${str})`, left, right + 1);
  }
};

const generateParenthesis = (n) => {
  const ans = [];

  backtrack(n, ans);
  return ans;
};

console.log(generateParenthesis(3));
