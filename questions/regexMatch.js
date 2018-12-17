const isMatch = (text, pattern, i = 0, j = 0, memo = {}) => {
  j = parseInt(j, 10);
  i = parseInt(i, 10);

  // define a unique key
  const matchIndeces = `${i}${j}`;

  // if previosly computed, return
  if (memo[matchIndeces]) {
    return memo[matchIndeces];
  }

  let ans;

  // if reached the end of pattern.length
  if (j === pattern.length) {
    // if also reached the end of text, match is true
    ans = (i === text.length);
    memo[matchIndeces] = ans;
    return memo[matchIndeces];
  }

  // is first letter match
  const firstMatch = (i < text.length) && (pattern[j] === text[i] || pattern[j] === '.');

  // if x* scenario
  if (((j + 1) < pattern.length) && pattern[j + 1] === '*') {
    // recuse skipping x* an try next letter, return if either is true
    ans = isMatch(text, pattern, i, j + 2, memo)
      || firstMatch && isMatch(text, pattern, i + 1, j, memo);
  } else {
    // move on to the next i and j
    ans = firstMatch && isMatch(text, pattern, i + 1, j + 1, memo);
  }

  // update answer and return
  memo[matchIndeces] = ans;
  return memo[matchIndeces];
};

console.log(isMatch('aaa', '*') === true);
console.log(isMatch('aaa', 'a*') === true);
console.log(isMatch('a', 'ab*') === true);
console.log(isMatch('aaa', 'a*a') === true);
console.log(isMatch('aaa', 'ab*a*c*a') === true);
console.log(isMatch('a', 'ab*a') === false);
console.log(isMatch('mississippi', 'mis*is*ip*.') === true);
console.log(isMatch('aaaaacccbbbbbx', 'c*a*cccb*x') === true);
console.log(isMatch('b', '.*c') === false);
