const calcValidParentheses = (str) => {
  if (str.length < 2) {
    return 0;
  }

  let currentScore = 0;
  let closedCount = 0;
  let max = 0;

  for (let i = 0; i < str.length; i += 1) {
    const paren = str[i];
    switch (paren) {
      case '(': {
        currentScore += 1;
        break;
      }
      case ')': {
        currentScore -= 1;
        closedCount += 1;
        break;
      }
      default: {
        return 0;
      }
    }

    if (currentScore < 0) {
      currentScore = 0;
      closedCount = 0;
      continue;
    }

    const calculatedAns = closedCount - currentScore;
    if (calculatedAns > max) {
      max = calculatedAns;
    }
  }

  const shorter = calcValidParentheses(str.slice(1));
  const ans = max > shorter ? max : shorter;
  return ans;
};

const longestValidParentheses = str => calcValidParentheses(str) * 2;

// console.log(longestValidParentheses('(()') === 2);
// console.log(longestValidParentheses(')()())') === 4);
// console.log(longestValidParentheses(')(()))') === 4);
// console.log(longestValidParentheses('()(())') === 6);
// console.log(longestValidParentheses('()(()') === 2);
// console.log(longestValidParentheses('(()())') === 6);
// console.log(longestValidParentheses('))()(()()') === 4);
// console.log(longestValidParentheses('(())()(()((') === 6);
console.log(longestValidParentheses('(()(()(((())(((((()()))((((()()(()()())())())()))()()()())(())()()(((()))))()((()))(((())()((()()())((())))(())))())((()())()()((()((())))))((()(((((()((()))(()()(())))((()))()))())'));
