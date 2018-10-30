/*
1) Create an empty stack and push -1 to it. The first element
   of stack is used to provide base for next valid string.

2) Initialize result as 0.

3) If the character is '(' i.e. str[i] == '('), push index
   'i' to the stack.

2) Else (if the character is ')')
   a) Pop an item from stack (Most of the time an opening bracket)
   b) If stack is not empty, then find length of current valid
      substring by taking difference between current index and
      top of the stack. If current length is more than result,
      then update the result.
   c) If stack is empty, push current index as base for next
      valid substring.

3) Return result.
 */

const Stack = require('../dataStructures/Stack');

const longestValidParentheses = (str) => {
  if (str.length < 2) {
    return 0;
  }

  const ansStack = new Stack([-1]);

  let max = 0;
  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];
    if (char === '(') {
      ansStack.add(i);
      continue;
    }

    ansStack.next();

    if (!ansStack.length) {
      ansStack.add(i);
      continue;
    }

    const last = ansStack.peek();
    const length = i - last;

    if (length > max) {
      max = length;
    }
  }

  return max;
};

console.log(longestValidParentheses('(()') === 2);
console.log(longestValidParentheses(')()())') === 4);
console.log(longestValidParentheses(')(()))') === 4);
console.log(longestValidParentheses('()(())') === 6);
console.log(longestValidParentheses('()(()') === 2);
console.log(longestValidParentheses('(()())') === 6);
console.log(longestValidParentheses('))()(()()') === 4);
console.log(longestValidParentheses('(())()(()((') === 6);
console.log(longestValidParentheses('(()(()(((())(((((()()))((((()()(()()())())())()))()()()())(())()()(((()))))()((()))(((())()((()()())((())))(())))())((()())()()((()((())))))((()(((((()((()))(()()(())))((()))()))())') === 132);
