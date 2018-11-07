const letterMap = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};

const letterCombinations = (digits, ans = []) => {
  const digitStr = digits.toString();

  // corner cases
  if (!digitStr || digitStr.length < 1) {
    return [];
  }

  if (digitStr.length === 1 && !ans.length) {
    return letterMap[digitStr];
  }

  // first round, being recursion
  if (!ans.length) {
    return letterCombinations(digitStr.slice(1), letterMap[digitStr.slice(0, 1)]);
  }

  const nextLetters = letterMap[digitStr.slice(0, 1)];

  // last round end recursion
  if (digitStr.length === 1) {
    const newAns = [];
    for (let i = 0; i < ans.length; i += 1) {
      newAns.push(...nextLetters.map(letter => `${ans[i]}${letter}`));
    }
    return newAns;
  }

  // middle rounds, continue recursion
  const newAns = [];
  for (let i = 0; i < ans.length; i += 1) {
    newAns.push(...nextLetters.map(letter => `${ans[i]}${letter}`));
  }

  return letterCombinations(digitStr.slice(1), newAns);
};

console.log(letterCombinations(2));
console.log(letterCombinations(234));
console.log(letterCombinations(''));
