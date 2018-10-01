// TODO memo-ize it
const isMatch = (text, pattern) => {
  if (!pattern.length) {
    return true;
  }

  const firstMatch = pattern[0] === text[0] || pattern[0] === '.';

  if (pattern.length >= 2 && pattern[1] === '*') {
    return isMatch(text, pattern.slice(2)) || firstMatch && isMatch(text.slice(1), pattern);
  }
  return firstMatch && isMatch(text.slice(1), pattern.slice(1));
};

console.log(isMatch('aaa', 'a*'));
console.log(isMatch('a', 'ab*') === true);
console.log(isMatch('aaa', 'a*a') === true);
console.log(isMatch('aaa', 'ab*a*c*a') === true);
console.log(isMatch('a', 'ab*a') === false);
console.log(isMatch('mississippi', 'mis*is*ip*.') === true);
console.log(isMatch('aaaaacccbbbbbx', 'c*a*cccb*x') === true);
